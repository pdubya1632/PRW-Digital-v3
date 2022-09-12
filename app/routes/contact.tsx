import { SITE_EMAIL_ADDRESS } from "../config/constants";

export default function () {
  return (
    <main className="min-h-screen p-7">
         <h2 className="mt-7 text-4xl">
          Let's work together! I'd love to hear about your project and see how I can help. Reach out at <a href={SITE_EMAIL_ADDRESS}>wrightmight@gmail.com</a>.
        </h2>
      {/* <div>
        <form method="post" action="#">
          <div className="card card-bordered bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </main>
  );
}

