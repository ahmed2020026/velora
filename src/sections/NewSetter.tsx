import { Mail, MoveRight } from "lucide-react"
import HeadSection from "../components/ui/HeadSection"

const NewSetter = () => {
    const subscription = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div className="container">
            <div className="text-center">
                <HeadSection head="Join the Velora circle" disc="Be the first to hear about new collections, private sales, and style notes. No spam, just timeless elegance." />
            </div>
            <div className="max-w-2xl mx-auto relative mt-10">
                <form onSubmit={subscription} className="">
                    <div className="flex justify-center items-center gap-2.5">
                        <div className="relative w-full">
                            <input
                                type="text"
                                className="peer rounded-md w-full border bg-white transition duration-200 border-dark/20 p-2 pl-8 text-sm outline-0 focus:border-dark"
                                autoComplete="off"
                                required
                                placeholder="Enter Your Email"
                                id="email"
                                name="email"
                                aria-label="email"
                            />
                            <Mail
                                size={18}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-dark/50 transition-colors duration-200 peer-focus:text-dark"
                            />
                        </div>
                        <button type="submit" className="group flex justify-center items-center bg-dark/80 text-sm hover:bg-dark hover:text-gold gap-1 transition duration-200 text-white p-2 px-4 rounded-md border-0 cursor-pointer">
                            SUBSCRIBE <MoveRight size={18} className="group-hover:translate-x-2 transition duration-200" />
                        </button>
                    </div>
                    <div className="flex items-center justify-start mt-5 gap-3 text-dark/70 font-medium tracking-wider text-sm">
                        <label htmlFor="man" className="flex items-center justify-start cursor-pointer gap-2.5">
                            <input type="radio" required name="gender" id="man" value={'man'} /> Man
                        </label>
                        <label htmlFor="woman" className="flex items-center justify-start cursor-pointer gap-2.5">
                            <input type="radio" required name="gender" id="woman" value={'woman'}/> Woman
                        </label>
                    </div>

                    <p className="text-center max-w-2xs text-xs mx-auto mt-5 text-dark/50">By subscribing you agree to our privacy policy. Unsubscribe anytime.</p>
                </form>
            </div>
        </div>
    )
}

export default NewSetter