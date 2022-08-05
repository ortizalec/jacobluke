<script>
  function scrollToContact(){
    document.getElementById("contact")?.scrollIntoView(
      {
        behavior: "smooth"
      }
    )
  }
</script>


<!-- Hero-->
<div class="flex 
sm:h-[80vh] sm:justify-center sm:align-middle 
flex-col sm:flex-row h-[100vh]">
    <div class="h-full flex justify-center 
    flex-col w-full items-center bg-suit-white">
      <h1 class="text-4xl sm:text-5xl font-bold text-suit-black">Jacob Ortiz</h1>
      <p class="text-center py-6 max-w-[23ch] sm:max-w-[50ch] text-2xl sm:text-3xl">California Real Estate Agent and Investor</p>
      <a href="#contact" class="btn hover:scale bg-suit-black text-suit-white" on:click={scrollToContact}>Contact Me</a>
    </div>
    <img src="headshot.png" alt="headshot" class="grayscale h-full">
</div>

<!--Testamonials-->
<div class="bg-suit-black text-suit-white
 flex flex-col justify-center items-center gap-20 py-28">
  <!--Header-->
  <div class="">
    <h1 class="text-4xl text-center max-w-[15ch] sm:max-w-none">Trustworthy, Reliable, and Kind</h1>
  </div>
  <!--Cards--> 
  <div class="flex justify-center sm:max-w-[90vw] gap-8 flex-wrap">
    <div class="border border-suit-gray p-5 w-[400px] flex flex-col gap-4">
      <h2 class="text-xl font-bold">Made our transaction easy and painless.</h2>
      <p class="italic">It was such a pleasure working with Jacob
        who seemed to have all the answers to our
        real estate questions. I would highly
        recommend him and his support team who
        made our transaction all so easy and
        painless.</p>
    </div>

    <div class="border border-suit-gray p-5 w-[400px] flex flex-col gap-4">
      <h2 class="text-xl font-bold">Nobody knows So-Cal like Jacob.</h2>
      <p class="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum, veritatis non repellendus tenetur quas ut tempora totam esse aperiam perferendis necessitatibus eveniet rem libero numquam, minus voluptates vel nobis.</p>
    </div>

    <div class="border border-suit-gray p-5 w-[400px] flex flex-col gap-4">
      <h2 class="text-xl font-bold">Made our transaction easy and painless.</h2>
      <p class="italic">It was such a pleasure working with Linda
        who seemed to have all the answers to our
        real estate questions. I would highly
        recommend her and her support team who
        made our transaction all so easy and
        painless.</p>
    </div>
  </div>
  
</div>

<!-- Contact Form-->
<div id="contact" class=" bg-suit-white text-suit-black
 flex flex-col sm:flex-row justify-around items-top gap-20 py-28 px-8">
  <div class="flex justify-start flex-col gap-5">
    <h1 class="text-4xl">Contact Me</h1>
    <p class="text-xl">Jacob Luke Ortiz</p>
    <p class="text-lg">Corona, CA</p>
    <p class="text-lg">555-555-5555</p>
    
  </div>
  <div class="flex flex-col gap-8">
    <h1 class="text-4xl">Or Leave a Message</h1>
    <div class="flex gap-8 flex-col sm:flex-row">
      <input type="text" class="bg-suit-white text-suit-black py-2 px-5 border border-suit-black" placeholder="Email">
      <input type="text" class="bg-suit-white text-suit-black py-2 px-5 border border-suit-black" placeholder="Name">
    </div>
    <textarea name="" id="" cols="10" rows="5" class="bg-suit-white text-suit-black py-2 px-5 border border-suit-black" placeholder="Additional Notes"></textarea>
    <button type="submit" class=" ml-auto border border-suit-black w-fit px-10">Send</button>
  </div>
</div>