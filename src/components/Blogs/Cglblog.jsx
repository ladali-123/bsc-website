import { useMemo } from "react";
import cglblog from "../../assets/cglblog.png";

/* ---------- tiny inline icons (no external deps) ---------- */
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

function BlogPage({ blogData }) {
  const html = useMemo(
    () => ({
      text1: blogData?.text1 || "",
      crux: blogData?.crux || "",
      hookText: blogData?.hookText || "",
      conclusion: blogData?.conclusion || "",
    }),
    [blogData]
  );

  return (
    <div className="w-full bg-[#f4f6fb] py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-12px_rgba(122,15,22,0.15)] p-6 md:p-12">
        <div className="flex flex-col gap-6">
          {/* Badge + Date + Title */}
          <div>
            <div className="flex items-center gap-3">
              {blogData?.badge && (
                <span className="text-[11px] font-semibold tracking-wide uppercase bg-[#7A0F16]/10 text-[#7A0F16] px-3 py-1 rounded-full">
                  {blogData.badge}
                </span>
              )}
              <span className="text-sm text-gray-500 font-medium">{blogData?.date}</span>
            </div>
            <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Full image below */}
          <div className="w-full">
            {blogData?.image && (
              <img
                src={blogData?.image}
                alt={blogData?.title}
                className="w-full h-auto rounded-2xl border border-gray-100"
              />
            )}
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-2 leading-relaxed border-l-2 border-[#7A0F16]/30 pl-4">
              {blogData?.description}
            </p>

            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blogData.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#f3f4f6] text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {html.text1 && (
          <div
            className="mt-10 text-gray-800 text-base leading-8 chsl-rich-content"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {html.crux && (
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.crux }} />
        )}

        {blogData?.hookTitle && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 pb-3 border-b border-gray-100">
              {blogData.hookTitle}
            </h2>
            {html.hookText && (
              <div
                className="mt-5 text-gray-800 chsl-rich-content"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
            <ul className="mt-5 space-y-3">
              {blogData.keyPoints.map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-[#faf7f5] border border-[#7A0F16]/10 rounded-2xl p-4 text-gray-800"
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7A0F16] text-white text-xs flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
            <div className="mt-5 space-y-3">
              {blogData.faqs.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-5 hover:border-[#7A0F16]/30 transition-colors">
                  <div className="font-semibold text-gray-900 flex gap-2">
                    <span className="text-[#7A0F16]">Q.</span>
                    {f.question}
                  </div>
                  <div className="mt-2 text-gray-600 pl-5">{f.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {html.conclusion && (
          <div className="mt-12" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
        )}

        {/* Contact / Admission CTA Card */}
        {blogData?.contact && (
          <div className="mt-12 relative overflow-hidden rounded-[1.75rem] bg-[#7A0F16]">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F4C542]" />

            <div className="relative px-7 py-9 md:px-12 md:py-12">
              <span className="inline-block text-[#F4C542] text-xs font-semibold tracking-wide">
                {blogData.contact.eyebrow}
              </span>

              <h3 className="mt-3 text-white text-2xl md:text-[2rem] font-bold leading-snug max-w-xl">
                {blogData.contact.headline}
              </h3>

              <p className="mt-4 text-[#F3D9DA] text-base md:text-lg leading-relaxed max-w-xl">
                {blogData.contact.message}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={blogData.contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#7A0F16] font-semibold px-7 py-3 rounded-full hover:bg-[#F4C542] transition-colors duration-200 w-fit"
                >
                  {blogData.contact.buttonText}
                </a>
              </div>

              <p className="mt-8 text-[#F3D9DA]/80 text-sm italic max-w-xl border-t border-white/15 pt-5">
                {blogData.contact.closingLine}
              </p>
            </div>
          </div>
        )}

        {/* Our Branches */}
        {Array.isArray(blogData?.branches) && blogData.branches.length > 0 && (
          <div className="mt-6 rounded-[1.75rem] bg-[#1a1a2e] px-7 py-9 md:px-12 md:py-10">
            <h3 className="text-white text-xl font-bold mb-7">Visit Us at Any of Our Branches</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogData.branches.map((b, idx) => (
                <div key={idx} className={idx !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}>
                  <h4 className="text-white font-semibold text-base mb-4">{b.name}</h4>
                  <div className="space-y-3 text-sm text-white/80">
                    <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                      <span className="text-[#F4C542]"><PhoneIcon /></span>
                      {b.phone}
                    </a>
                    <a href={`mailto:${b.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                      <span className="text-[#F4C542] flex-shrink-0"><MailIcon /></span>
                      {b.email}
                    </a>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#F4C542] flex-shrink-0 mt-0.5"><PinIcon /></span>
                      <span>{b.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* scoped styling for the CMS-style rich text blocks (tables, headings) */}
      <style>{`
        .chsl-rich-content h2 { color: #1f2937; }
        .chsl-rich-content h3 { color: #1f2937; }
        .chsl-rich-content p { text-align: justify; line-height: 1.9; }
        .chsl-rich-content ul li, .chsl-rich-content ol li { text-align: justify; line-height: 1.9; margin-bottom: 0.9rem; }
        .chsl-rich-content ul li:last-child, .chsl-rich-content ol li:last-child { margin-bottom: 0; }
        .chsl-rich-content ul, .chsl-rich-content ol { margin-bottom: 1.75rem; }
        .chsl-rich-content table { border-radius: 0.75rem; overflow: hidden; }
        .chsl-rich-content thead tr { background: #7A0F16 !important; }
        .chsl-rich-content thead th { color: #ffffff !important; border-color: #7A0F16 !important; font-weight: 600; }
        .chsl-rich-content tbody tr:nth-child(even) { background: #faf7f5; }
      `}</style>
    </div>
  );
}

export default function CglBlog() {
  const blogData = {
    badge: "SSC Exams",

    title: "SSC CGL 2026 Tier 1 Is Live: Smart Last-Phase Strategy and Your Tier 2 Roadmap",

    description:
      "SSC CGL 2026 Tier 1 is being held right now. Whether your exam date is still ahead or you have already appeared, this guide gives you a calm, practical plan: what to revise, how to attempt the paper, and how to start preparing for Tier 2 without losing a single week.",

    date: "10 October 2026",

    image: cglblog,

    link: "/blog/ssc-cgl-2026-tier-1-strategy-tier-2-roadmap",

    tags: [
      "SSC CGL 2026",
      "SSC Coaching",
      "Tier 2 Preparation",
      "Government Exams",
      "BSC Academy",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The Staff Selection Commission has put the SSC CGL 2026 Tier 1 examination on the calendar from 30 September to 30 October 2026, in computer-based mode, for around 12,256 tentative vacancies in Group B and Group C posts across central government ministries and departments. For graduates in Bihar who have spent months preparing, the waiting is finally over and the real test has begun.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Here is the truth most aspirants learn too late: at this stage, your result depends less on how many hours you study and more on how well you use the days you have left. Some of you will sit for Tier 1 in the coming days, and some of you have already written it and are wondering what to do next. This guide is for both groups.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">1. Quick Snapshot of SSC CGL 2026</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Detail</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Information</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Notification Released</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">21 May 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tentative Vacancies</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">12,256</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 1 Exam Window</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">30 September to 30 October 2026 (CBT)</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 2 Exam</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Expected in December 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Tier 1 Paper</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100 objective questions, 200 marks</td></tr>
        </tbody>
      </table>
      <p style="font-size: 0.95rem; color: #6b7280;">Dates and pattern can be revised by SSC, so always cross-check the latest notice on the official website before your exam.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">2. What the Tier 1 Paper Tests</h2>
      <p>Tier 1 is a screening round, but it is also your ticket to everything that follows. The paper is divided into four equal sections, so no single subject can carry you alone.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Subject</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Questions</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Marks</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">A</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Intelligence and Reasoning</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">B</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">C</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Quantitative Aptitude</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">D</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English Comprehension</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">25</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">50</td></tr>
          <tr style="background: #faf7f5; font-weight: 600;"><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Total</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;"></td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">100</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">200</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">3. If Your Tier 1 Date Is Still Ahead</h2>
      <p>Treat the remaining days like a final rehearsal, not a fresh start. These habits make the biggest difference:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li><strong>Close the books on new topics.</strong> A chapter you start tonight will rarely turn into marks tomorrow. Spend that time sharpening what you already know.</li>
        <li><strong>Revise from your own error notebook.</strong> Your past mistakes are the most personal syllabus you have. Go through them again and again until they stop repeating.</li>
        <li><strong>Practise at exam time.</strong> If your shift is in the afternoon, take your mocks in the afternoon. Your body clock matters more than you think.</li>
        <li><strong>Pack and plan early.</strong> Admit card, photo ID, travel route and reporting time should be sorted a day before, so the morning stays calm.</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">4. How to Attempt the Paper</h2>
      <p>A strong attempt is a planned attempt. Walk in with a rough order, but stay flexible if a section feels easier than expected.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Section</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">What to Do</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">What to Avoid</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Pick up quick, pattern-based questions first</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Burning minutes on one heavy puzzle</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Answer what you know within seconds</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Overthinking a fact you simply do not remember</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Quantitative Aptitude</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Solve easy and medium questions first, use shortcuts</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Getting trapped in long calculations</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Read each sentence fully before choosing an option</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Marking answers by instinct alone</td></tr>
        </tbody>
      </table>

      <div style="background: #faf7f5; padding: 1.1rem 1.25rem; border-radius: 0.75rem; margin: 1rem 0; border-left: 3px solid #7A0F16;"><strong style="color:#7A0F16;">Pro Tip:</strong> Keep the last few minutes of the paper for review. Many candidates lose marks on questions they could have corrected in a calm second look.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">5. Already Appeared? Start Tier 2 Today</h2>
      <p>This is where selections are quietly won. With Tier 2 expected in December, the gap between the two stages is shorter than it looks. Candidates who wait for the Tier 1 result before restarting often lose several valuable weeks.</p>
      <p>Tier 2 goes deeper than Tier 1, which means speed alone is not enough. It rewards strong fundamentals in Mathematics, solid English and steady practice with longer, mixed question sets.</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Focus Area</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">What to Build Now</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Mathematical Abilities</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Strong basics plus higher-level topics like algebra, geometry, trigonometry and data interpretation</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">English</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Daily reading, error spotting, sentence improvement and vocabulary</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Reasoning and General Awareness</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Regular practice sets and a steady current affairs habit</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Computer and Skill Components</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Basics of computers and practice for any skill or data-entry stage applicable to your post</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">6. A Simple Weekly Rhythm for the Next Two Months</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li><strong>Mon to Fri:</strong> Two focused subject blocks per day, plus 30 minutes of current affairs.</li>
        <li><strong>Saturday:</strong> One full-length mock test followed by detailed review.</li>
        <li><strong>Sunday:</strong> Revise weak topics from the mock, then rest properly.</li>
      </ul>
      <p>The review matters more than the test itself. A mock you do not analyse is just practice you will repeat the same mistakes in.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">7. Mistakes That Quietly Cost Marks</h2>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Discussing answers with friends right after the paper, which only adds stress.</li>
        <li>Switching books or sources in the last phase.</li>
        <li>Guessing blindly without checking the negative marking rules.</li>
        <li>Neglecting sleep and food during the exam window.</li>
        <li>Pausing preparation completely after Tier 1.</li>
      </ol>
    `,

    crux: `
      <div style="background-color: #faf7f5; padding: 1.5rem; border-left: 4px solid #7A0F16; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>SSC CGL 2026</strong> is a two-stage journey. Use the days before Tier 1 to revise and stay calm, and use the days after it to build the depth Tier 2 demands. Candidates who keep moving without a long break are the ones who reach the final list.
        </p>
      </div>
    `,

    hookTitle: "How BSC Academy Supports Your SSC Preparation",
    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.9; text-align: justify; margin-bottom: 1.75rem; color: #374151;">A good plan on paper is not enough. What most aspirants really need is someone to check their progress, fix their weak spots and keep them steady when motivation dips. That is the support you can expect at BSC Academy:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0 0 1.75rem 0;">
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Subject-wise Classroom Teaching</strong> — Reasoning, Maths, English and General Awareness are taught by faculty who focus on one subject at a time, so your concepts become clear and lasting.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Regular Doubt Support</strong> — Questions get answered quickly, so a small confusion never grows into a lost week.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Mock Tests and Practice Sets</strong> — Timed tests that follow the real computer-based pattern, so exam day feels familiar.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Performance Review</strong> — A clear look at your accuracy, speed and weak areas after tests, so your next study session has a purpose.</li>
        <li style="margin-bottom: 1.1rem; line-height: 1.9; text-align: justify; color: #374151;"><strong>Current Affairs Guidance</strong> — Exam-focused updates that keep General Awareness light and manageable.</li>
        <li style="line-height: 1.9; text-align: justify; color: #374151;"><strong>Mentorship and Discipline</strong> — Honest guidance that keeps you consistent through long preparation cycles.</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.9; text-align: justify; color: #374151;">Hard work becomes selection when it has direction. That direction is what we aim to give every student who walks through our doors.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Tier 1:</strong> 30 September to 30 October 2026, with 100 questions and 200 marks.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Before the exam:</strong> Revise, take timed mocks and avoid new topics.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>After the exam:</strong> Begin Tier 2 preparation immediately, as it is expected in December.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Always verify:</strong> Check the latest SSC notice for dates, pattern and marking rules.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Success Formula:</strong> Calm revision + smart attempt + Tier 2 depth + expert guidance.</span>",
    ],

    faqs: [
      {
        question: "When is the SSC CGL 2026 Tier 1 exam being held?",
        answer:
          "SSC has scheduled the Tier 1 computer-based examination from 30 September to 30 October 2026. Your individual date, shift and centre are mentioned on your admit card.",
      },
      {
        question: "How many vacancies are announced for SSC CGL 2026?",
        answer:
          "SSC has indicated about 12,256 tentative vacancies for this recruitment cycle. The final number can change as departments update their requirements.",
      },
      {
        question: "I have already given Tier 1. Should I wait for the result to start Tier 2?",
        answer:
          "No. Tier 2 is expected in December, so waiting for the result can cost you valuable weeks. Begin Maths and English practice now and adjust later once the result is out.",
      },
      {
        question: "Is it worth learning new topics a few days before the exam?",
        answer:
          "In most cases, no. Revising what you already know and fixing earlier mistakes gives far better returns than starting fresh topics at the last moment.",
      },
      {
        question: "Does BSC Academy guide students for SSC exams?",
        answer:
          "Yes. We offer structured classes, doubt support, mock tests and mentorship for SSC and other government exams. You can visit any of our Patna branches to speak with our team.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Behind every central government posting is a long stretch of ordinary days: a notebook filled with corrected mistakes, a mock test taken when no one was watching, and a decision to continue even after a bad result. The exam window is open right now, and what you do in these weeks will stay with you for a long time.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          Stay calm, keep revising, and keep your eyes on Tier 2. Your dream job is built one steady day at a time.
        </p>
      </div>
    `,

    contact: {
      eyebrow: "Admissions Open at BSC Academy Patna",
      headline: "Preparing for SSC? Let's build your plan together.",
      message:
        "Talk to our mentors, understand your strengths and weak areas, and start a preparation routine that actually fits your goal.",
      buttonText: "Contact Us Now",
      link: "https://bscacademypatna.com/contact",
      closingLine:
        "The best time to fix your preparation is today.",
    },

    branches: [
      {
        name: "Rajendra Nagar - Branch",
        phone: "97984 22292",
        email: "bscacademypatna4@gmail.com",
        address:
          "Grand Arya Complex, Ground Floor, Behind Kotak Mahindra Bank, Arya Kumar Road, Rajendra Nagar, Patna - 800016",
      },
      {
        name: "Boring Road - Branch",
        phone: "97984 22293",
        email: "bscacademypatna4@gmail.com",
        address:
          "Shakti Commercial Complex, A 3, West Boring Canal Road, Nearby Bharat Petrol Pump, Patna, Bihar 800001",
      },
      {
        name: "Jagdeo Path - Branch",
        phone: "97984 22296",
        email: "bscacademypatna4@gmail.com",
        address:
          "Ambedkar Path, opp. Ara Garden, Jagdeo Path, Rukanpura, Patna, Bihar 800014",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}