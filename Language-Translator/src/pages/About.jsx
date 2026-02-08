export default function About() {
    return (
        <div className="w-full max-w-4xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-12 mx-auto mt-10">
            <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About Nexus Hub</h1>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                    Nexus Hub Translator is a state-of-the-art translation platform built for speed and elegance.
                    Leveraging neural-inspired design and powerful APIs, we provide seamless translation
                    experiences between major Indian languages and English.
                </p>
                <p>
                    Our mission is to bridge the communication gap across diverse linguistic landscapes using
                    modern web technologies that are both functional and visually stunning.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <h2 className="text-xl font-semibold text-blue-800 mb-2">Why Nexus Hub?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>High-precision MyMemory API integration</li>
                        <li>Futuristic Glassmorphism architecture</li>
                        <li>Optimized for speed and accessibility</li>
                        <li>Zero-latency language swapping</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
