import { useMemo } from "react";
import guide from '../../assets/guide.png';

function BlogPage({ blogData }) {
  const html = useMemo(() => ({
    text1: blogData?.text1 || "",
    crux: blogData?.crux || "",
    hookText: blogData?.hookText || "",
    conclusion: blogData?.conclusion || "",
  }), [blogData]);

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
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
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
          <div className="mt-8 text-gray-800 text-base leading-8" dangerouslySetInnerHTML={{ __html: html.text1 }} />
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

export default function BSCAcademyDisciplineBlog() {

  const blogData = {
    title: "BSC Academy Patna: More Than Just Coaching – How Discipline & Guidance Shape Success",

    description: "Every serious banking or government exam aspirant needs structure. Discover how BSC Academy Patna builds daily routines, mentorship, mock test discipline, and a competitive environment to turn ordinary students into successful candidates.",

    date: "2026-06-12",

    image: guide, 

    link: "/blog/bsc-academy-discipline-guidance",

    tags: [
      "BSC Academy",
      "Discipline",
      "Banking Coaching Patna",
      "SSC Preparation",
      "Government Exam Coaching",
      "Mentorship",
      "Patna",
      "Study Routine"
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every student preparing for banking, SSC, or other government exams asks one question: 
        <em>"I have books, I have the syllabus – why do I need coaching?"</em>
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The answer isn't just about notes or lectures. It's about <strong>discipline, consistency, and the right guidance</strong>. 
        BSC Academy Patna has been mentoring students for over 24 years, and here's how they turn an ordinary aspirant into a successful candidate.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        1. Building a Daily Routine That Works
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        Most students start with enthusiasm but lose track within weeks. No fixed study hours, no revision plan – just scattered efforts.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        At BSC Academy, every student follows a <strong>structured timetable</strong>:
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li><strong>Morning batch (6 AM – 9 AM)</strong> – For college-going students who want to study before classes.</li>
        <li><strong>Evening batch (4 PM – 7 PM)</strong> – For graduates or full-time aspirants.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        <strong>How it creates discipline:</strong> When you attend classes daily, solve mock tests on fixed days, and submit assignments on time, studying becomes a <strong>habit</strong> – not a burden.
      </p>

      <blockquote style="border-left: 4px solid #2563eb; background-color: #f3f4f6; padding: 1rem; margin: 1.5rem 0;">
        “I never had a study routine before joining BSC Academy. Now I wake up at 5 AM automatically.” – <em>Anonymous student review</em>
      </blockquote>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        2. Regular Mock Tests & Performance Tracking
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        Discipline without feedback is blind. BSC Academy conducts:
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>Weekly topic-wise tests (after every 3-4 chapters)</li>
        <li>Full-length mock tests (simulating real exam environment)</li>
        <li>Sectional time-bound tests (especially for new SSC pattern)</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        After each test, students receive a <strong>detailed performance report</strong> showing:
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>Strong & weak topics</li>
        <li>Time spent per question</li>
        <li>Rank among batchmates</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        <strong>Why this matters:</strong> You don't just study – you <strong>measure, analyze, and improve</strong>. That's real guidance.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        3. Mentorship – One-on-One Doubt Sessions
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        In self-study, doubts pile up. You watch YouTube videos, ask in Telegram groups, but rarely get a clear answer.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        BSC Academy assigns <strong>subject-wise mentors</strong> to every batch.
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>Daily doubt-clearing hour after class (4-5 PM)</li>
        <li>Extra sessions for weak students (free of cost)</li>
        <li>Personalized strategy meetings every 15 days</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        This removes the fear of "what if I don't understand this topic?" – because someone is always there to help.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        4. Discipline Through Peer Pressure (The Good Kind)
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        When you sit in a classroom with 40 serious aspirants, you naturally push yourself.
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>If you miss a test, you see others scoring well.</li>
        <li>If you don't revise, you see classmates solving questions faster.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        BSC Academy creates a <strong>positive competitive environment</strong> – not toxic, but motivating.
        Students form study groups, share notes, and even revise together during breaks.
      </p>

      <blockquote style="border-left: 4px solid #2563eb; background-color: #f3f4f6; padding: 1rem; margin: 1.5rem 0;">
        “I started studying 3 hours extra just because my friend was solving more mocks than me.” – <em>A current banking aspirant</em>
      </blockquote>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        5. Guidance Beyond Syllabus
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        Many students fail because they don't know <strong>what to study next</strong> or <strong>which exam to target</strong>.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        BSC Academy provides:
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>Exam calendar alerts (IBPS, SBI, SSC, Railway, Bihar Police dates)</li>
        <li>Strategy sessions by successful alumni (how they cracked exams)</li>
        <li>Current affairs capsules (weekly PDFs and class discussions)</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        This removes confusion – you always know the next step.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        6. Parent-Teacher Communication (For Serious Accountability)
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        Parents often worry: <em>"My child says he's studying, but is he really?"</em>
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        BSC Academy maintains a <strong>monthly progress report</strong> sent to parents via SMS/WhatsApp.
      </p>

      <ul style="margin-bottom: 1.5rem;">
        <li>Attendance percentage</li>
        <li>Test scores & rank</li>
        <li>Mentor's remarks</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem;">
        This keeps both students and parents accountable. No one can hide poor preparation.
      </p>
    `,

    crux: `
      <div style="background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem; margin: 1rem 0;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin: 0; color: #374151;">
          <strong>BSC Academy Patna</strong> builds discipline through daily structured routines, weekly mock tests with performance analysis, one-on-one mentorship, positive peer pressure, exam strategy guidance, and parent-teacher accountability. It's not just coaching – it's a complete system that transforms how you prepare.
        </p>
      </div>
    `,

    hookTitle: "What Real Help Looks Like",

    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
        Coaching isn't magic. It's a <strong>system</strong> that forces you to:
      </p>
      <ul style="margin-bottom: 1rem;">
        <li>Wake up on time</li>
        <li>Study what matters</li>
        <li>Test yourself regularly</li>
        <li>Fix mistakes before the real exam</li>
      </ul>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
        BSC Academy Patna provides exactly that – a disciplined, guided, and supportive environment.
        <strong>If you're serious about banking, SSC, or any government exam, don't just collect books. Collect discipline. And that starts here.</strong>
      </p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>Structured daily timetable</strong> – morning & evening batches to suit your schedule</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>Regular mock tests</strong> with detailed performance analysis</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>One-on-one mentorship</strong> and daily doubt-clearing sessions</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>Positive competitive environment</strong> that keeps you motivated</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>Exam strategy guidance</strong> – which exam to target and how</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>✅ <strong>Parent-teacher communication</strong> for complete accountability</span>"
    ],

    conclusion: `
      <div style="margin-top: 2rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          Success in government exams isn't just about intelligence – it's about <strong>discipline, guidance, and the right environment</strong>.
          BSC Academy Patna gives you all three.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          👉 <strong>Visit BSC Academy Patna</strong> – <a href="https://bscacademypatna.com/" target="_blank" style="color: #2563eb; text-decoration: underline;">https://bscacademypatna.com/</a>
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1rem; color: #374151;">
          📍 Multiple centers in Patna. Classroom & online batches available.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
          <em>Want to know more? Call or visit the website for free career counseling session.</em>
        </p>
      </div>
    `,

    faqs: [
      {
        question: "How does BSC Academy build discipline in students?",
        answer: "Through fixed daily schedules, regular attendance tracking, weekly mock tests, and personalized mentorship. Students follow a routine that becomes a habit."
      },
      {
        question: "Does BSC Academy provide mock tests?",
        answer: "Yes, both online and offline mock tests are conducted weekly, with detailed performance analysis and rank comparison."
      },
      {
        question: "Is there personal doubt-solving available?",
        answer: "Absolutely. Every batch has subject-wise mentors, and there is a daily doubt-clearing hour after class. Extra sessions are also provided for weak students."
      },
      {
        question: "How do parents stay informed about their child's progress?",
        answer: "BSC Academy sends monthly progress reports via SMS/WhatsApp that include attendance, test scores, rank, and mentor remarks."
      },
      {
        question: "Does BSC Academy only prepare for banking exams?",
        answer: "No, they prepare students for banking (SBI, IBPS, RBI), SSC, Railway, Bihar Police, and other government exams."
      }
    ]
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}