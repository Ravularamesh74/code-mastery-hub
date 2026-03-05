import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 3
const DEFAULT_DURATION = 5000

type ToastVariant = "default" | "success" | "error" | "warning"

export type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: ToastVariant
  duration?: number
}

interface State {
  toasts: ToasterToast[]
}

type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> & { id: string } }
  | { type: "DISMISS_TOAST"; id?: string }
  | { type: "REMOVE_TOAST"; id?: string }

let memoryState: State = { toasts: [] }

const listeners = new Set<(state: State) => void>()

function notify() {
  listeners.forEach((listener) => listener(memoryState))
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          action.id === undefined || t.id === action.id
            ? { ...t, open: false }
            : t
        ),
      }

    case "REMOVE_TOAST":
      return {
        ...state,
        toasts:
          action.id === undefined
            ? []
            : state.toasts.filter((t) => t.id !== action.id),
      }
  }
}

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  notify()
}

let counter = 0
function generateId() {
  counter = (counter + 1) % Number.MAX_SAFE_INTEGER
  return counter.toString()
}

export function toast(props: Omit<ToasterToast, "id">) {
  const id = generateId()

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      duration: props.duration ?? DEFAULT_DURATION,
      onOpenChange: (open) => {
        if (!open) dispatch({ type: "DISMISS_TOAST", id })
      },
    },
  })

  if (props.duration !== Infinity) {
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST", id })
    }, props.duration ?? DEFAULT_DURATION)
  }

  return {
    id,
    dismiss: () => dispatch({ type: "DISMISS_TOAST", id }),
    update: (data: Partial<ToasterToast>) =>
      dispatch({ type: "UPDATE_TOAST", toast: { ...data, id } }),
  }
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.add(setState)
    return () => {
      listeners.delete(setState)
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: (id?: string) => dispatch({ type: "DISMISS_TOAST", id }),
  }
}