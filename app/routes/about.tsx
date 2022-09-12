export default function () {
  return (
     <main className="min-h-screen grid sm:grid-cols-1 md:grid-cols-3 p-7 gap-4 mt-7">
      <div>
        <img src="https://fvhsvmaekuyarkujwasn.supabase.co/storage/v1/object/public/portfolio/selfies/about-profile-1.jpg" alt="prw profile pic" className="rounded-lg" />
      </div>
      <div className="md:col-span-2">
        <h2 className="text-4xl">
          Hey there 👋
          <br />
          I'm currently finishing up a Full Stack Coding Bootcamp through
          University of Washington and operate a photo booth company called{" "}
          <a href="http://hellothereyou.com">Hello There You</a> in Seattle, WA.
          My past lives include video production, front-end development, UX
          design, and interning at an ad agency.

        </h2>
      </div>
    </main>
  );
}
