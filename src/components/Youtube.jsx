const YoutubeSection = () => {
    return (
        <section className="w-full py-10 px-6 md:px-24 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1FA8] mb-10">
                YouTube
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Video 1 */}
                <iframe
                    className="w-full h-52 rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/R9xFNzusDWQ?si=NmjlQCcO8Ec23GGS"
                    title="YouTube video 1"
                    allowFullScreen
                ></iframe>

                {/* Video 2 */}
                <iframe
                    className="w-full h-52 rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/B8EzRT6QtKY?si=p0gjMVkQl2G9v4SW"
                    title="YouTube video 2"
                    allowFullScreen
                ></iframe>

                {/* Video 3 */}
                <iframe
                    className="w-full h-52 rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/lQnRRXSZrIc?si=XffNa-6Ho9aRtjlZ"
                    title="YouTube video 3"
                    allowFullScreen
                ></iframe>

                {/* Video 4 */}
                <iframe
                    className="w-full h-52 rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/UTIS-5bfu-U?si=hasVSRfOpzBm-YO3"
                    title="YouTube video 4"
                    allowFullScreen
                ></iframe>

            </div>
            <div className="text-center items-center pt-10">
                <a
                    href="https://www.youtube.com/@BSCAcademyPatna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="bg-red-600 text-white font-semibold py-3 px-4 
      rounded-sm hover:bg-red-700 transition-all duration-300"
                    >
                        Subscribe Now
                    </button>
                </a>
            </div>
        </section>
    )
}

export default YoutubeSection