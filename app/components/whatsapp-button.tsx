export function WhatsAppButton() {
  const phoneNumber = "2348072257930"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hi Codenza, I'd like to discuss a project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Codenza on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 animate-pulse"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.15L2 22l5.13-1.5a9.85 9.85 0 0 0 4.9 1.33h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.42 1.32-1.94 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.11.31.02.49-.09.18-.14.29-.28.44-.14.16-.29.35-.42.47-.14.13-.28.27-.12.55.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.13.44.11.6-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.13.45.2.51.31.07.11.07.63-.17 1.31Z" />
      </svg>
    </a>
  );
}