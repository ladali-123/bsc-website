import { useMemo } from "react";
import topper from "../../assets/topper.png";

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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col gap-6">
          {/* Title + Date on top */}
          <div>
            <div className="text-sm text-red-600 font-semibold">{blogData?.date}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              {blogData?.title}
            </h1>
          </div>

          {/* Full image below */}
          <div className="w-full">
            {blogData?.image && (
              <img
                src={blogData?.image}
                alt={blogData?.title}
                className="w-full h-auto rounded-2xl"
              />
            )}
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">{blogData?.description}</p>

            {Array.isArray(blogData?.tags) && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {blogData.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-[#f3f4f6] text-gray-800 px-3 py-1 rounded-full text-sm"
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
            className="mt-8 text-gray-800 text-base leading-8"
            dangerouslySetInnerHTML={{ __html: html.text1 }}
          />
        )}

        {html.crux && (
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: html.crux }} />
        )}

        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{blogData.hookTitle}</h2>
            {html.hookText && (
              <div
                className="mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: html.hookText }}
              />
            )}
          </div>
        )}

        {Array.isArray(blogData?.keyPoints) && blogData.keyPoints.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
            <ul className="mt-4 space-y-3">
              {blogData.keyPoints.map((p, idx) => (
                <li
                  key={idx}
                  className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-4 text-gray-800"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Google Reviews Card */}
        {blogData?.googleReviews && (
          <div className="mt-10">
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                border: "1px solid #e5e7eb",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <svg width="28" height="28" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 16.3 3 9.7 7.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 45c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.6 36 26.9 37 24 37c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.6 40.6 16.3 45 24 45z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.4C41.5 36 44 30.5 44 24c0-1.4-.1-2.7-.4-3.5z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: 700, color: "#111827", fontSize: "1.05rem" }}>
                    BSC Academy Patna — Google Rating
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "0.15rem" }}>
                    <span style={{ color: "#f59e0b", fontSize: "1rem", letterSpacing: "1px" }}>★★★★★</span>
                    <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                      {blogData.googleReviews.rating} ({blogData.googleReviews.count} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ color: "#374151", fontSize: "1rem", lineHeight: "1.7", fontStyle: "italic" }}>
                "{blogData.googleReviews.quote}"
              </p>
              <div style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "0.35rem" }}>
                — {blogData.googleReviews.reviewerName}, Google Review
              </div>

              <a
                href={blogData.googleReviews.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "1.25rem",
                  padding: "0.6rem 1.25rem",
                  background: "#1a73e8",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
              >
                See All Reviews on Google →
              </a>
            </div>
          </div>
        )}

        {Array.isArray(blogData?.faqs) && blogData.faqs.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
            <div className="mt-4 space-y-4">
              {blogData.faqs.map((f, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                  <div className="font-semibold text-gray-900">{f.question}</div>
                  <div className="mt-2 text-gray-700">{f.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {html.conclusion && (
          <div className="mt-10" dangerouslySetInnerHTML={{ __html: html.conclusion }} />
        )}

        {/* Contact Us Card */}
        {blogData?.contact && (
          <div className="mt-10">
            <div
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                borderRadius: "1.5rem",
                padding: "2rem",
                color: "#ffffff",
              }}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Ready to Start Your Journey?
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                Talk to our counsellors, visit the branch nearest to you, or book a free
                demo class — whatever works for you.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "0.9rem", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.25rem" }}>Location</div>
                  <div style={{ fontWeight: 600 }}>{blogData.contact.address}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "0.9rem", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.25rem" }}>Call Us</div>
                  <div style={{ fontWeight: 600 }}>{blogData.contact.phone}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "0.9rem", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.25rem" }}>Branches</div>
                  <div style={{ fontWeight: 600 }}>{blogData.contact.branches}</div>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
                <a
                  href={blogData.contact.contactLink}
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  Contact Us Now
                </a>
                <a
                  href={blogData.contact.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "transparent",
                    color: "#ffffff",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                  }}
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BSCAcademyToppersBlog() {
  const blogData = {
    title: "Self-Study Isn't Working? Here's Why Toppers Choose BSC Academy Patna",

    description:
      "Preparing for SSC, Railway, or Banking exams alone can only take you so far. Here's how mock tests, doubt sessions, experienced teachers, and dedicated branches at BSC Academy Patna help students actually clear these exams — and even nail the interview.",

    date: "2026-08-07",

    image: topper,

    link: "/blog/self-study-vs-bsc-academy-patna",

    tags: [
      "SSC Coaching",
      "Railway Exams",
      "Banking Coaching",
      "BSC Academy",
      "Patna",
      "Mock Tests",
      "Interview Preparation",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, thousands of students in Bihar pick up their books, download the syllabus PDF, and start preparing for SSC, Railway, or Banking exams — all on their own. It's a brave start. But months later, many find themselves stuck: unclear on what to prioritize, unsure if they're improving, and with no one to turn to when a doubt comes up at 11 PM.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This is exactly why toppers rarely prepare in isolation. They study inside a system — one built on mock tests, real feedback, and expert guidance. That system is what BSC Academy Patna offers, and it's why students walk in confused and walk out selected.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">1. What's the Biggest Problem With Self-Preparation?</h2>
      <p>When students prepare for SSC, Railway, or Banking exams on their own, the biggest issue is that they often don't know whether they're studying in the right direction.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>The syllabus is huge, and setting the right priorities is hard</li>
        <li>There's no one to clear doubts on the spot</li>
        <li>No proper performance analysis after mock tests</li>
        <li>Motivation and consistency are hard to maintain alone</li>
        <li>Updates on exam pattern changes don't reach on time</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Reality Check:</strong> Hard work without direction still leads to average results. Direction is what a good coaching system adds.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">2. Why Mock Tests Make the Real Difference</h2>
      <p>Studying alone rarely includes disciplined, exam-pattern mock testing. At BSC Academy Patna, regular mock tests are conducted exactly on the pattern of the actual exam.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Time management practice under real conditions</li>
        <li>Weak areas get identified early, not on exam day</li>
        <li>Speed and accuracy improve together</li>
        <li>Detailed analysis after every test shows the next step</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">3. Doubt Sessions — Where Every Question Gets Answered</h2>
      <p>A doubt left unresolved today becomes a bigger gap tomorrow. BSC Academy Patna runs regular doubt sessions where students can directly ask experienced teachers.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Concepts become crystal clear</li>
        <li>No time wasted studying with a wrong understanding</li>
        <li>Weak topics get extra, focused attention</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">4. Experienced Teachers — The Real Advantage</h2>
      <p>BSC Academy Patna's faculty carries deep, practical experience of SSC, Railway, and Banking exam patterns.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Up-to-date knowledge of the latest exam trends</li>
        <li>Time-saving tricks that come only from experience</li>
        <li>Guidance tailored to each student's strengths and weaknesses</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">5. Three Branches, One Standard</h2>
      <p>BSC Academy Patna runs dedicated, specialized branches for SSC, Railway, and Banking — so preparation is exam-specific, not generic.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Exam-specific syllabus coverage in every branch</li>
        <li>Separate mock test series per exam</li>
        <li>Subject expert teachers for each stream</li>
        <li>Doubt sessions structured around that exam's pattern</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">6. Why BSC Academy Students Consistently Get Results</h2>
      <p>Results come from a system followed consistently, not luck.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Regular assessment through mock tests to track real progress</li>
        <li>Personal attention on weak areas, not one-size-fits-all teaching</li>
        <li>A continuous revision strategy so concepts stay fresh till exam day</li>
        <li>Mentorship that keeps students consistent through the whole course</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">7. Interview Preparation — Beyond Just the Written Exam</h2>
      <p>For many SSC, Railway, and Banking posts, the interview round decides final selection. BSC Academy Patna prepares students fully for this stage too.</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Mock interview sessions to build real confidence</li>
        <li>Guidance on body language, communication, and presentation</li>
        <li>Practice with commonly asked questions and smart answers</li>
        <li>Personalized feedback after every mock interview round</li>
      </ul>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Bottom Line:</strong> Complete preparation — from Day 1 of coaching to the final interview — is what sets BSC Academy Patna students apart.</div>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>BSC Academy Patna</strong> gives SSC, Railway, and Banking aspirants what self-study can't: regular mock tests, live doubt sessions, experienced teachers, exam-specific branches, and complete interview preparation — everything a serious aspirant needs to actually get selected.
        </p>
      </div>
    `,

    hookTitle: "Who Is This Blog For?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Students currently preparing alone and feeling stuck</li>
        <li>Aspirants who keep missing cut-offs despite hard work</li>
        <li>First-timers who don't know where to even start</li>
        <li>Anyone who has cleared the written exam before but struggled at interview</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If any of this sounds like you — keep reading.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Mock Tests:</strong> Real exam-pattern practice with detailed post-test analysis.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Doubt Sessions:</strong> Direct access to experienced teachers, no doubt left unanswered.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Three Branches:</strong> Dedicated tracks for SSC, Railway, and Banking.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Interview Prep:</strong> Mock interviews and personalized feedback, not just written-exam focus.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Success Formula:</strong> Consistency + Mock Tests + Doubt Clearing + Expert Guidance.</span>",
    ],

    googleReviews: {
      rating: "4.8",
      count: "500+",
      quote: "Best coaching in Patna for SSC and Railway prep. The mock tests and doubt sessions really made the difference.",
      reviewerName: "A verified student",
      link: "https://www.google.com/search?q=BSC+Academy+Patna",
    },

    faqs: [
      {
        question: "I keep missing cut-offs despite studying alone. What am I doing wrong?",
        answer:
          "Usually it's not effort but direction — no structured mock testing or feedback loop. Joining a system with regular mocks and analysis, like at BSC Academy Patna, often fixes this within a few months.",
      },
      {
        question: "How often are mock tests conducted at BSC Academy Patna?",
        answer:
          "Mock tests are held on a regular schedule across all three branches — SSC, Railway, and Banking — each designed to match the real exam pattern.",
      },
      {
        question: "Do you also help with interview preparation, or just the written exam?",
        answer:
          "Both. BSC Academy Patna runs dedicated mock interview sessions with personalized feedback, alongside full written-exam coaching.",
      },
      {
        question: "Can I join if I've failed an exam before?",
        answer:
          "Absolutely. Many selections at BSC Academy Patna are students who struggled once or twice before joining — the right strategy and consistent practice turn things around.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          <strong>Stop Preparing Alone — Prepare With BSC Academy</strong><br/>
          If you're still preparing manually, without proper guidance, now is the time to change that. Regular mock tests, doubt-clearing sessions, experienced teachers, and specialized branches for SSC, Railway, and Banking — together, these make your preparation structured, focused, and result-oriented.
        </p>
      </div>
    `,

    contact: {
      address: "Patna, Bihar",
      phone: "Available on request via contact page",
      branches: "SSC · Railway · Banking · Other Govt Exams",
      contactLink: "https://bscacademypatna.com/contact",
      websiteLink: "https://bscacademypatna.com/",
    },
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}