import { AlignRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* This CustomButton requires Tailwind CSS v2.0+ */
export default function CustomButton({ bg, border, color, name, size, width, layertxt, layerbg ,goto}) {
    return (
        <>

            <Link
                to={goto}
                type="button"
                className={`${size}  inline-flex items-center justify-center px-8 py-4 border-2 border-${border} group-hover:border-${layerbg} text-base font-bold rounded-md shadow-sm bg-${bg} text-${color} relative overflow-hidden group`}  
            >
                <p className="group-hover:hidden">{name}</p>
                <span
                    className={`absolute inset-0 bg-${layerbg} transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0`}
                ></span>
                <span className={`relative z-10 text-${layertxt}`}>
                    {/* Both the name and the arrow icon in one line, visible only on hover */}
                    <p className="hidden group-hover:flex items-center space-x-2">
                        <span>{name}</span>
                        <ArrowRight />
                    </p>
                </span>
            </Link>

        </>
    )
}
