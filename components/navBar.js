const d = document
const navI = ["#recepcion", "#enviar", "#recibir", "#entregar"]

export function navBarBtn(){
  d.addEventListener("click", (e) =>{
    for (const i of navI) {
      if(e.target.matches(i)|| e.target.matches(`${i} *`)){
        d.querySelector(i).classList.add("is-active")
      }else{
        d.querySelector(i).classList.remove("is-active")
      }      
    }
  })
}

export function navBar (){
    const nav = d.createElement("nav")

    nav.innerHTML = /*html*/ ` 
    <a href="#seccion1">
    <svg id="recepcion" class="navBarItem is-active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <g
          transform="matrix(14.339537,0,0,14.339537,-657.46785,-1592.7956)">
         <path d="m 50.875324,111.82639 c -1.036966,0 -1.880622,0.84365 -1.880622,1.88054 0,1.03711 0.843656,1.8809 1.880622,1.8809 1.036892,0 1.880548,-0.84379 1.880548,-1.8809 0,-1.03689 -0.843588,-1.88054 -1.880548,-1.88054 z"/>
         <path d="m 47.060113,124.3167 7.599939,0.0266 0.02044,-3.67145 c 0.02659,-4.77565 -7.654496,-4.99411 -7.613724,0.002 z"/>
       </g>
       <g
          transform="matrix(2.6918183,-0.0015804,0.0015804,2.6918183,-60.998643,-355.45077)"
          style="stroke-width:3">
         <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
         <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
       </g>
       <path d="m 105.12999,75.421127 c 11.41862,-4.461915 22.75476,-9.419777 33.60049,-17.326155 l -3.35482,-6.498607 c 5.60008,3.162798 11.2542,6.173601 17.54063,7.405867 -2.17854,4.839441 -3.49386,11.134237 -4.12138,18.588549 l -3.35481,-6.498608 c -11.92122,4.433627 -22.9555,10.510371 -33.5757,17.354252 -0.57886,-4.641277 -3.07882,-8.937184 -6.73434,-13.025386 z"/>
     </svg>
 </a>
 <a href="#seccion2">
    <svg id="enviar" class="navBarItem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">

       <path d="M 78.6237,137.99532 C 82.14047,105.25531 84.37311,72.097281 78.971821,36.454193 L 59.328247,36.395929 C 73.80477,26.970024 87.986025,17.226965 98.712502,3.7731838 107.54549,14.961635 120.91626,25.896388 137.90254,36.628981 l -19.64358,-0.05826 c -4.20697,33.902666 -3.39927,67.727839 -0.25035,101.516869 -11.77762,-4.37189 -25.112802,-3.73777 -39.384936,-0.0923 z"/>
       <g transform="matrix(6.1972343,0,0,6.1972343,-470.98488,-643.11883)">
         <g transform="translate(5.2916672,-29.104179)">
           <path d="m 82.82914,164.29753 7.663489,0.0156 -0.08571,-16.13245 c -0.02537,-4.77565 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
         <g transform="translate(0,-30.162513)">
           <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
         <g transform="translate(11.112501,-30.162513)">
           <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
       </g>
     </svg>
 </a>
 <a href="#seccion3">
    <svg id="recibir" class="navBarItem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">

       <path d="m 118.74834,-87.913667 c -3.58594,32.732505 -5.88865,65.885742 -0.56269,101.54016 l 19.6434,0.0998 c -14.49641,9.39529 -28.69822,19.10836 -39.453101,32.53944 C 89.566624,35.058623 76.218991,24.095643 59.25543,13.327173 l 19.643413,0.0998 c 4.278604,-33.893725 3.542385,-67.720529 0.464876,-101.516138 11.768355,4.396769 25.104841,3.79083 39.384651,0.175528 z"/>
       <g transform="matrix(6.1972343,0,0,6.1972343,-470.98488,-643.11883)">
         <g transform="translate(5.2916672,-29.104179)">
           <path d="m 82.82914,164.29753 7.663489,0.0156 -0.08571,-16.13245 c -0.02537,-4.77565 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
         <g transform="translate(0,-30.162513)">
           <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
         <g transform="translate(11.112501,-30.162513)">
           <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
           <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
         </g>
       </g>
     </svg>
 </a>
 <a href="#seccion4">
    <svg id="entregar" class="navBarItem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <g transform="matrix(6.2094264,0,0,6.2094264,-158.62283,-687.04866)">
         <path d="m 50.875324,111.82639 c -1.036966,0 -1.880622,0.84365 -1.880622,1.88054 0,1.03711 0.843656,1.8809 1.880622,1.8809 1.036892,0 1.880548,-0.84379 1.880548,-1.8809 0,-1.03689 -0.843588,-1.88054 -1.880548,-1.88054 z"/>
         <path d="m 47.060113,124.3167 7.599939,0.0266 0.02044,-3.67145 c 0.02659,-4.77565 -7.654496,-4.99411 -7.613724,0.002 z"/>
       </g>
       <g transform="matrix(7.4608125,-0.00438034,0.00438034,7.4608125,-607.76574,-1041.6815)">
         <path d="m 82.77778,165.36523 7.714849,-0.0154 -0.08571,-17.16915 c -0.02384,-4.77566 -7.654496,-4.99411 -7.613724,0.002 z"/>
         <path d="m 85.448844,144.71606 -0.04925,-2.1169 c -0.04919,-2.1144 2.485673,-2.04173 2.486705,-0.014 l 0.0011,2.16186"/>
       </g>
       <path d="m 77.549001,76.890594 c 11.41862,-4.461915 22.754759,-9.419777 33.600489,-17.326155 l -3.35482,-6.498607 c 5.60008,3.162798 11.2542,6.173601 17.54063,7.405867 -2.17854,4.839441 -3.49386,11.134237 -4.12138,18.588549 l -3.35481,-6.498608 c -11.92122,4.433627 -22.955499,10.510371 -33.575699,17.354252 -0.57886,-4.641277 -3.07882,-8.937184 -6.73434,-13.025386 z"/>
     </svg>
</a>
    `
    return nav
}