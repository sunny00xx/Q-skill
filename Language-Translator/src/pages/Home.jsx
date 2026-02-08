import { useState } from "react";

export default function Home() {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [sourceLang, setSourceLang] = useState("en-GB");
    const [targetLang, setTargetLang] = useState("hi-IN");
    const [isLoading, setIsLoading] = useState(false);

    const languages = {
        "en-GB": "English",
        "hi-IN": "Hindi",
        "mr-IN": "Marathi",
        "ta-IN": "Tamil",
        "ur-PK": "Urdu",
        "pa-IN": "Punjabi",
    };

    const handleTranslate = async () => {
        if (!inputText.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`
            );
            const data = await response.json();
            setTranslatedText(data.responseData.translatedText);
        } catch (error) {
            console.error("Translation error:", error);
            setTranslatedText("Error: Could not translate. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSwap = () => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
        setInputText(translatedText);
        setTranslatedText(inputText);
    };

    const handleClear = () => {
        setInputText("");
        setTranslatedText("");
    };

    return (
        <div className="w-full max-w-6xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-8 mx-auto mt-10">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
                    🌐 Nexus Hub Translator
                </h1>
                <span className="text-sm text-gray-600">
                    Neural Core Active • User: <b>Sunny</b>
                </span>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <select
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value)}
                    className="p-4 rounded-2xl border bg-white/70 cursor-pointer hover:bg-white transition shadow-sm outline-none"
                >
                    {Object.entries(languages).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>

                <div
                    onClick={handleSwap}
                    className="flex items-center justify-center text-3xl cursor-pointer hover:scale-110 transition active:scale-95 text-gray-400"
                >
                    ⇄
                </div>

                <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="p-4 rounded-2xl border bg-white/70 cursor-pointer hover:bg-white transition shadow-sm outline-none"
                >
                    {Object.entries(languages).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text to translate..."
                    className="w-full h-80 p-8 rounded-3xl border text-xl resize-none bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-100 transition shadow-inner"
                />

                <textarea
                    value={translatedText}
                    readOnly
                    placeholder={isLoading ? "Translating..." : "Translated output..."}
                    className="w-full h-80 p-8 rounded-3xl border text-xl resize-none bg-gray-50/50 shadow-inner"
                />
            </div>

            <div className="flex justify-center gap-6 mt-10">
                <button
                    onClick={handleTranslate}
                    disabled={isLoading}
                    className="px-12 py-5 rounded-3xl text-white text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 shadow-xl hover:scale-105 transition duration-300 active:scale-95 disabled:opacity-50"
                >
                    {isLoading ? "⚡ Translating..." : "⚡ Translate"}
                </button>

                <button
                    onClick={handleClear}
                    className="px-12 py-5 rounded-3xl text-xl bg-white/70 border hover:bg-white transition active:scale-95"
                >
                    🗑 Clear
                </button>
            </div>

            <div className="text-center mt-8 text-sm text-gray-500">
                Encrypted Neural Translation System • v1.0
            </div>
        </div>
    );
}
