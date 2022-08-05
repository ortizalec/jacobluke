<script>
  import "../app.css";
  import Icon from '@iconify/svelte';
  import {domain} from "$lib/globals.js";
</script>

<!--NavBar-->
<div class="navbar border-b border-black">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl font-body"
    href="/">{domain}</a>
  </div>
  <div class="navbar-end flex align-middle">
    <a href="https://www.instagram.com/_jacobluke/?hl=en" target="_blank">
      <Icon icon="gg:instagram" width="24" height="24" />
    </a> 

  </div>
</div>

<slot />


<!--Footer-->
<footer class="footer items-center p-4 bg-suit-gray text-neutral-content">
  <div class=" items-end grid-flow-col">
    <img src="splash.png" alt="Keller Williams" class="h-[50px] rounded-lg">
    <p class="text-lg">DRE#02166608</p>
  </div> 
</footer>