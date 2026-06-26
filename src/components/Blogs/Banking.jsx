import { useMemo } from "react";
import sarkImg from "../../assets/sark.png";

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
      </div>
    </div>
  );
}

export default function BSCAcademyPatnaBlog() {
  const blogData = {
    title: "BSC Academy Patna — Your Ultimate Guide to Cracking Government Exams in 2026",

    description:
      "From SSC to Banking, Railway to State Level exams — BSC Academy Patna has helped thousands of students crack India's most competitive government exams. This complete guide covers courses, expert tips, preparation strategies, and everything you need to start your journey.",

    date: "2026-06-06",

   
    image: sarkImg,

    link: "/blog/bsc-academy-patna-guide-2025",

    tags: [
      "Government Exams",
      "SSC Coaching",
      "Banking Coaching",
      "Railway Exams",
      "Bihar Police",
      "BPSC",
      "BSC Academy",
      "Patna",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, lakhs of students from Bihar sit in front of their books, dreaming of the day they will walk into a government office with an appointment letter in hand. The dream is real. The competition is tough. But with the right guidance, the right strategy, and the right coaching — it is absolutely achievable.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        BSC Academy Patna has been that guiding hand for thousands of students across Bihar. From SSC to Banking, Railway to State Level exams — we have helped students from every background crack some of India's most competitive government exams.
      </p>
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This blog is your complete guide — covering our courses, expert tips, preparation strategies, and everything you need to know before starting your government exam journey.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Understanding the Government Exam Landscape in India</h2>
      <p>Before you start preparing, it is important to understand what you are getting into.</p>
      <p>India conducts hundreds of government recruitment exams every year — SSC, IBPS, RRB, UPSC, State PSCs, and many more. Each exam has its own syllabus, pattern, and difficulty level. The biggest mistake most students make is starting preparation without understanding which exam suits them best.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #f9fafb;">
        <thead><tr style="background: #e5e7eb;"><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Exam Category</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Popular Exams</th><th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left;">Eligibility</th></tr></thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">SSC</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">CGL, CHSL, MTS, GD</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">10th / 12th / Graduation</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Banking</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">IBPS PO, Clerk, SBI PO, RBI</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Graduation</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Railway</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">RRB NTPC, Group D</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">10th / 12th / Graduation</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 0.75rem;">State Level</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Bihar Police, BPSC, TET</td><td style="border: 1px solid #d1d5db; padding: 0.75rem;">Varies</td></tr>
        </tbody>
      </table>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">Our Courses — Everything Under One Roof</h2>
      
      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">1. SSC Coaching — CGL, CHSL, MTS, GD</h3>
      <p>At BSC Academy, our SSC coaching covers: Complete Tier 1 and Tier 2 Preparation, Previous Year Questions (PYQ) Practice, Daily Mock Tests, Subject-wise Focus, and Doubt Clearing Sessions.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Pro Tip for SSC Aspirants:</strong> The biggest difference between a selected and a rejected candidate in SSC is accuracy — not just speed. Practice mock tests daily and focus on reducing negative marking.</div>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">2. Banking Exams — IBPS PO, Clerk, SBI PO, RBI Grade B</h3>
      <p>Our Banking coaching includes: Reasoning Ability, Quantitative Aptitude, English Language, Banking Awareness, Computer Awareness, and Interview Preparation.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Pro Tip for Banking Aspirants:</strong> Banking exams have sectional cut-offs — meaning you must score minimum marks in every section separately. Do not ignore any subject.</div>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">3. Railway Exams — RRB NTPC, Group D, ALP</h3>
      <p>BSC Academy's Railway exam coaching includes: RRB NTPC Preparation, Group D Preparation, Mathematics and General Science, General Awareness and Current Affairs, Technical Classes, and CBT Practice.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Pro Tip for Railway Aspirants:</strong> In RRB exams, General Science and Mathematics together account for a large chunk of marks. Revise NCERT thoroughly.</div>

      <h3 style="font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem;">4. Other Exams — Bihar Police, Teaching Jobs, State Level Exams</h3>
      <p>We also offer dedicated coaching for Bihar Police Constable and SI, BPSC, STET and TET, and State Level GK.</p>
      <div style="background: #eef2ff; padding: 1rem; border-radius: 0.75rem; margin: 1rem 0;"><strong>Pro Tip for State Exam Aspirants:</strong> Bihar-specific GK is the game-changer in state level exams. At BSC Academy, we make sure our Bihar GK coverage is thorough and regularly updated.</div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">10 Powerful Tips to Crack Any Government Exam</h2>
      <ol style="list-style-type: decimal; padding-left: 1.5rem; margin: 1rem 0;">
        <li><strong>Know Your Exam Inside Out</strong> – Download official notification, read syllabus, exam pattern.</li>
        <li><strong>Make a Realistic Study Schedule</strong> – Plan in time blocks, give more time to weak subjects.</li>
        <li><strong>NCERT Books Are Your Foundation</strong> – For Maths, Science, GK – Class 6 to 10 NCERT is best.</li>
        <li><strong>Solve Previous Year Questions Every Day</strong> – At least 20–30 PYQs daily.</li>
        <li><strong>Give Mock Tests Regularly</strong> – Full-length mock tests 3–4 times a week, analyze mistakes.</li>
        <li><strong>Stay Updated with Current Affairs</strong> – Read reliable news, make short notes, revise weekly.</li>
        <li><strong>Focus on Speed and Accuracy Together</strong> – Attempt only confident questions, avoid negative marking.</li>
        <li><strong>Revise, Revise, Revise</strong> – Weekly and monthly revision cycles.</li>
        <li><strong>Take Care of Your Physical and Mental Health</strong> – Sleep 7–8 hours, exercise daily.</li>
        <li><strong>Join the Right Coaching</strong> – Guided preparation gives structure, accountability, expert guidance.</li>
      </ol>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">A Day in the Life of a BSC Academy Student</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li><strong>Morning Session (8 AM – 11 AM):</strong> Subject classes with expert faculty.</li>
        <li><strong>Afternoon Session (12 PM – 2 PM):</strong> Practice session – topic-wise questions, PYQs.</li>
        <li><strong>Mock Test (3 PM – 4 PM):</strong> Full or sectional mock test in real exam environment.</li>
        <li><strong>Evening Doubt Session (5 PM – 6 PM):</strong> Personal doubt clearing.</li>
        <li><strong>Self Study:</strong> Revision at home.</li>
      </ul>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>BSC Academy Patna</strong> offers expert coaching for SSC, Banking, Railway, Bihar Police, BPSC, and other state exams. With experienced faculty, daily mock tests, updated study material, and a proven track record, we provide the right guidance to crack government exams in 2025.
        </p>
      </div>
    `,

    hookTitle: "Who Is This Blog For?",
    hookText: `
      <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 1rem 0;">
        <li>Students who have just finished 10th or 12th and want to start early</li>
        <li>Graduates who are looking for a stable government job</li>
        <li>Working professionals who want to switch to a government career</li>
        <li>Anyone who has failed an exam before and wants to come back stronger</li>
        <li>First-time aspirants who have no idea where to begin</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8;">If you fall into any of these categories — keep reading. This blog is written for you.</p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>SSC:</strong> Focus on accuracy and daily mock tests to reduce negative marking.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Banking:</strong> Sectional cut-offs matter – strengthen every subject equally.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Railway:</strong> NCERT Class 9-10 Science is your goldmine for General Science.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>State Exams:</strong> Bihar-specific GK (history, geography, schemes) is the differentiator.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'><strong>Success Formula:</strong> Consistency + Mock Tests + Revision + Expert Guidance.</span>",
    ],

    faqs: [
      {
        question: "I am a 12th pass student. Which exam should I target first?",
        answer:
          "SSC CHSL, RRB Group D, and Bihar Police are excellent starting points for 12th pass students. BSC Academy offers dedicated batches for all three.",
      },
      {
        question: "How many hours should I study daily?",
        answer:
          "Quality matters more than quantity. A focused 5 to 6 hours of daily study with regular mock tests is more than enough for most government exams. Consistency over months is the key.",
      },
      {
        question: "Can I prepare for multiple exams at the same time?",
        answer:
          "Yes — many exams like SSC CGL, IBPS PO, and RRB NTPC share a similar syllabus. At BSC Academy, we guide students on how to smartly cover common topics and then focus on exam-specific areas.",
      },
      {
        question: "What if I have failed an exam before?",
        answer:
          "Failure is just feedback. Many of our top selections are students who failed once or twice before joining us. The right strategy, honest self-analysis, and consistent practice always turns things around.",
      },
      {
        question: "Are there any online classes available?",
        answer:
          "Please visit bscacademypatna.com or contact us directly for the latest information on batch types, timings, and online options.",
      },
    ],

    conclusion: `
      <div style="border-top: 2px solid #e5e7eb; padding-top: 1.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          <strong>Admissions Are Open — Your Dream Job Is Waiting</strong><br/>
          New batches for SSC, Banking, Railway, and State Level exams are starting soon. Seats are strictly limited to maintain quality of teaching and personal attention for every student.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Do not let another year pass by watching others get selected while you are still waiting. Take action today.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          📍 Location: Patna, Bihar<br/>
          🌐 Website: <a href="https://bscacademypatna.com" target="_blank" style="color: #2563eb;">bscacademypatna.com</a>
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          The government job you are dreaming of is real. The path to it is clear. All you need is the right guide — and BSC Academy Patna is here for exactly that. Start today. Your future self will thank you.
        </p>
      </div>
    `,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}