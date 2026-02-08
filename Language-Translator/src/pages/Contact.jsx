export default function Contact() {
    return (
        <div className="w-full max-w-2xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-12 mx-auto mt-10">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Get in Touch</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-4 rounded-xl border bg-white/70 focus:outline-none focus:ring-4 focus:ring-blue-100 transition shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-4 rounded-xl border bg-white/70 focus:outline-none focus:ring-4 focus:ring-blue-100 transition shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                        placeholder="How can we help you?"
                        className="w-full h-32 p-4 rounded-xl border bg-white/70 focus:outline-none focus:ring-4 focus:ring-blue-100 transition shadow-sm resize-none"
                    />
                </div>
                <button
                    type="button"
                    className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-[1.02] transition active:scale-[0.98]"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
