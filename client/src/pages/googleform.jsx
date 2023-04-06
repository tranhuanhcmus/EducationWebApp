export default function GoogleForm() {
  return (
    <div className="bg-white w-full h-full max-w-full border border-gray-200 rounded-lg dark:border-gray-700l p-4 overflow-hidden">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfI5CzFHlVFADyPvr1OxQRW9A6iUHzSe6mMFOaWCKKMnNi6iA/viewform?embedded=true"
        className="w-full "
        height="100%"
      >
        Loading…
      </iframe>
    </div>
  );
}
