import { useMemo } from "react";
import constImg from "../../assets/const.png";

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
            <img
              src={blogData?.image}
              alt={blogData?.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Description + Tags below image */}
          <div>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              {blogData?.description}
            </p>

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
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: html.crux }}
          />
        )}

        {blogData?.hookTitle && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              {blogData.hookTitle}
            </h2>
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
          <div
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: html.conclusion }}
          />
        )}
      </div>
    </div>
  );
}

export default function ConsistencyBSCAcademyBlog() {
  const blogData = {
    title: "The Real Secret to Success Is Consistency and BSC Academy Helps You Build It",

    description:
      "Every year, thousands of students prepare for government exams, but only a fraction succeed. The difference is consistency. Discover how BSC Academy Patna helps students build daily habits, overcome motivation dips, and achieve long-term success in SSC, Banking, Railway, BPSC, and other competitive exams.",

    date: "2026-06-04",

    image: constImg,

    tags: [
      "Consistency",
      "Government Exams",
      "BSC Academy",
      "Patna",
      "SSC",
      "Banking",
      "Railway",
      "BPSC",
      "Study Habits",
    ],

    text1: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every year, thousands of students begin their preparation for government exams with a clear goal in mind: securing a stable and respected career. They purchase books, join coaching classes, and create ambitious study plans. Yet when results are announced, only a fraction of them achieve their target.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        What makes the difference?
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Many people assume success depends on intelligence, talent, or luck. In reality, the students who consistently achieve results often share one common quality: <strong>consistency</strong>.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At BSC Academy Patna, we have seen this truth play out time and again. Students from different backgrounds, with different academic records, and different levels of experience have gone on to clear competitive exams because they remained committed to their preparation every day.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Why Consistency Matters More Than Motivation
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Motivation feels great when it is present, but it does not last forever.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        There will be days when you feel excited to study and days when you would rather do anything else. If your preparation depends entirely on motivation, your progress will always be unpredictable.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Consistency creates discipline. It allows students to keep moving forward regardless of how they feel on a particular day.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        A student who studies four focused hours every day is often far better prepared than a student who studies ten hours occasionally and then takes long breaks.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Success in competitive exams is not built through occasional bursts of effort. It is built through steady progress made every single day.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        What Consistency Looks Like in Practice
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Consistency does not mean studying 12 hours a day without rest. In fact, that approach often leads to burnout.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Real consistency means creating a routine that you can maintain for months.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        A consistent student:
      </p>

      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li>Studies regularly according to a schedule.</li>
        <li>Revises topics before they are forgotten.</li>
        <li>Attends classes and tests seriously.</li>
        <li>Continues preparing even on difficult days.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Small daily efforts may not seem impressive at first, but over time they create a powerful advantage.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        The Power of Small Daily Improvements
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Preparation for government exams works much like compound interest.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Every topic you learn today makes tomorrow's learning easier. Every revision strengthens your memory. Every mock test improves your accuracy and confidence.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At first, progress may seem slow. But after weeks and months of consistent preparation, the improvement becomes impossible to ignore.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Students who study consistently often find that:
      </p>

      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li>Concepts become easier to understand.</li>
        <li>Revision takes less time.</li>
        <li>Confidence grows naturally.</li>
        <li>Exam performance improves steadily.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This is why consistency remains one of the most important habits for long-term success.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        How BSC Academy Helps Students Stay Consistent
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Many students understand the importance of consistency but struggle to maintain it on their own.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This is where the right guidance and environment make a significant difference.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At BSC Academy Patna, we believe that success comes from a combination of quality teaching and disciplined preparation. Our goal is not only to teach subjects but also to help students develop habits that lead to success.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        We support students through:
      </p>

      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li>Regular classes with structured learning plans.</li>
        <li>Frequent mock tests and performance tracking.</li>
        <li>Dedicated doubt-clearing sessions.</li>
        <li>Experienced faculty guidance and mentorship.</li>
        <li>A focused and competitive learning environment.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        This structure helps students avoid common problems such as procrastination, irregular study schedules, and loss of motivation.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        Why Students Choose BSC Academy Patna
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Building consistency becomes much easier when you are surrounded by the right people and systems.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At BSC Academy Patna, students receive more than just classroom instruction. They become part of an environment designed to keep them focused, accountable, and continuously improving.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Students choose BSC Academy because of:
      </p>

      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li>Experienced faculty with years of competitive exam coaching expertise.</li>
        <li>Updated study material based on the latest exam patterns.</li>
        <li>Regular practice tests and detailed performance analysis.</li>
        <li>Personalized guidance and academic support.</li>
        <li>A disciplined atmosphere that encourages daily progress.</li>
        <li>Proven results across SSC, Banking, Railway, BPSC, and other government examinations.</li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Over the years, many students from diverse backgrounds have transformed their aspirations into successful careers through consistent preparation and the right guidance.
      </p>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        The Mindset That Leads to Success
      </h2>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        One of the most important lessons every aspirant must learn is to stop waiting for the perfect time to begin.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        There will always be distractions, challenges, and excuses.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        The students who succeed are those who continue despite them.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        They focus on daily progress rather than immediate results. They trust the process even when improvement feels slow. Most importantly, they understand that success is not achieved in a single day—it is earned through hundreds of productive days put together.
      </p>
    `,

    crux: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151; background-color: #f3f4f6; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem;">
        <strong>
          Success in competitive exams is rarely about being the smartest student. It's about showing up every day. 
          Consistency transforms ordinary effort into extraordinary results, and BSC Academy Patna provides the guidance, 
          structure, and environment to help students build this essential habit.
        </strong>
      </p>
    `,

    hookTitle: "Why Consistency Is the Real Secret to Success",

    hookText: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Success is not achieved in a single day—it is earned through hundreds of productive days put together. 
        Consistency helps students retain knowledge, improve confidence, and stay prepared when exam day arrives.
        At BSC Academy Patna, our teaching methods, test series, mentorship, and academic support are all designed 
        to help students build strong study habits and stay committed to their preparation journey.
      </p>
    `,

    keyPoints: [
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Consistency creates discipline and keeps you moving forward, even on difficult days.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Small daily efforts compound like interest, making learning easier and revision faster over time.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>A consistent 4-hour daily study routine beats occasional 10-hour study marathons.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>BSC Academy provides structured learning, mock tests, doubt-clearing, and mentorship to build consistency.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Success favors those who stop waiting for perfect conditions and start making daily progress.</span>",
      "<span style='font-size: 1.125rem; line-height: 1.8;'>Proven results across SSC, Banking, Railway, BPSC, and other exams through consistent preparation at BSC Academy Patna.</span>",
    ],

    conclusion: `
      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Success in competitive exams is rarely about being the smartest student in the room. More often, it is about being the student who shows up every day and continues working toward the goal.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Consistency transforms ordinary effort into extraordinary results. It helps students retain knowledge, improve confidence, and stay prepared when exam day arrives.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        At BSC Academy Patna, we understand that consistency is the foundation of success. That is why our teaching methods, test series, mentorship, and academic support are designed to help students build strong study habits and stay committed to their preparation journey.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        If you are serious about achieving your government job dream, BSC Academy Patna can provide the guidance, structure, and support you need to stay consistent and move closer to success every day.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        Because government exam success is not built overnight. It is built through consistent effort, and BSC Academy is here to help you build it.
      </p>

      <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: #374151;">
        <strong>BSC Academy Patna – Helping Students Build Consistency, Confidence, and Careers.</strong>
      </p>
    `,

    faqs: [
      {
        question: "Why is consistency more important than motivation for exam preparation?",
        answer:
          "Motivation is temporary and fluctuates, but consistency creates discipline. A student who studies daily, even for fewer hours, builds steady progress, retains knowledge better, and avoids burnout. Consistency ensures you keep moving forward regardless of how you feel on a particular day.",
      },
      {
        question: "How does BSC Academy Patna help students maintain consistency?",
        answer:
          "BSC Academy provides structured learning plans, regular classes, frequent mock tests, performance tracking, doubt-clearing sessions, and a disciplined competitive environment. These systems help students avoid procrastination, irregular schedules, and loss of motivation.",
      },
      {
        question: "What does a consistent study routine look like for government exams?",
        answer:
          "A consistent routine means studying according to a fixed schedule (e.g., 4-5 focused hours daily), revising topics regularly, attending classes and tests seriously, and continuing preparation even on difficult days. It's about sustainable effort, not long hours that lead to burnout.",
      },
      {
        question: "Can students from any background succeed with consistent preparation at BSC Academy?",
        answer:
          "Yes. BSC Academy has helped students from diverse academic backgrounds and different levels of experience clear competitive exams like SSC, Banking, Railway, and BPSC. The key is consistent daily effort combined with the right guidance and environment.",
      },
      {
        question: "What is the first step to building consistency in exam preparation?",
        answer:
          "Stop waiting for the perfect time to begin. Start with a small, achievable daily target (e.g., 2-3 hours). Create a fixed schedule, eliminate distractions, and join a supportive coaching environment like BSC Academy Patna to stay accountable and focused.",
      },
    ],
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}