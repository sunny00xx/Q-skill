# 🌐 Language-Translator

**Language-Translator** is a sleek, modern web application designed for seamless translation between English and major Indian languages. It features a futuristic glassmorphism UI and a fully responsive layout.

---

## 🚀 Key Features

- **Multi-lingual Support**: Specialized translation for Hindi, Marathi, Tamil, Urdu, and Punjabi.
- **Instant Language Swap**: One-tap toggle to reverse source and target languages.
- **Premium UI**: Uses Glassmorphism principles (frosted glass, backdrop blurs) for a high-end feel.
- **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- **Neural Translation**: Fast translation powered by the MyMemory API.

---

## 🛠 Technology Stack

- **React**: Core library for the user interface.
- **Vite**: Super-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Client-side routing for seamless navigation.
- **MyMemory API**: Integrated translation service.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation & Local Development

1.  **Navigate to the project directory**:
    ```bash
    cd Language-Translator
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the development server**:
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```text
Language-Translator/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Static local assets (images, etc.)
│   ├── components/
│   │   └── Navbar.jsx   # Interactive glassmorphism navigation
│   ├── pages/
│   │   ├── Home.jsx     # Main Translation Engine
│   │   ├── About.jsx    # Application info
│   │   └── Contact.jsx  # Support and Feedback
│   ├── App.jsx          # Route management
│   ├── App.css          # Shared global styles
│   ├── index.css        # Tailwind directives
│   └── main.jsx         # Entry point
├── index.html           # Base HTML
├── package.json         # Dependency configuration
├── tailwind.config.js   # Style customization
├── vite.config.js       # Build settings
└── explanation details.md # Technical deep-dive
```

---

## 📖 How to Use

1.  **Input Text**: Paste or type text into the source textarea.
2.  **Target Selection**: Choose the language you wish to translate into.
3.  **Execute**: Press the **⚡ Translate** button.
4.  **Manage**:
    - Use **⇄** to swap source/target context.
    - Use **🗑 Clear** to wipe the slate clean.

---
