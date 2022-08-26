
export const AppHeader = () => {
  return (
<div className="navbar mt-6">
	<div className="flex-1">
	  <a className="normal-case font-medium pl-5 leading-5" href="/">Patrick<span className="pl-1">Richardson</span> Wright</a>
	</div>
	<div className="flex-none">
	  <ul className="menu menu-horizontal p-5">
		<li><a href="/work">Work</a></li>
		<li><a href="/about">About</a></li>
	  </ul>
	</div>
  </div>
    );
};