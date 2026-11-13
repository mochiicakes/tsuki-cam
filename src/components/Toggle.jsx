import { useId } from 'react'
import { Moon } from 'lucide-react'

// On/off switch in the Tsuki style: the knob slides over and shows a little moon when on.
const Toggle = ({ checked, onChange, disabled, children, className = '' }) => {
  const id = useId()
  return (
    <div className={`flex items-center justify-between gap-3 ${disabled ? 'opacity-45' : ''} ${className}`}>
      <label htmlFor={id} className={`text-ink ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        {children}
      </label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed ${
          checked ? 'bg-accent border-accent' : 'bg-paper-deep border-line'
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute left-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-surface shadow transition-transform duration-200 ${
            checked ? 'translate-x-5' : ''
          }`}
        >
          {checked && <Moon className="h-3 w-3 text-accent fill-current" />}
        </span>
      </button>
    </div>
  )
}

export default Toggle
