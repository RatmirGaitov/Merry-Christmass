var first = true
generate()

function generate() {
   setTimeout(generate, 1500)
   var stumpWidth = 2
   var stumpHeight = 1
   var treeHeight = 12
   var treeWidth = 0
   document.body.innerHTML = ''
   append(char('*', '#FCD101'))

   for(var i = 0; i < treeHeight; i++){
      layer = char('/')
      for(var o = 0; o < treeWidth*2; o++){
         var character = char()
         if(i == treeHeight-1) character = char('^')
         if(i == treeHeight-1 && o > Math.floor(treeWidth*2/2)-stumpWidth-1 && o < Math.ceil(treeWidth*2/2)+stumpWidth){
            var character = char('&nbsp', '#d96')
            if(o == Math.floor(treeWidth*2/2)-stumpWidth) character =   char('|', '#d96')
            if(o == Math.ceil(treeWidth*2/2)+stumpWidth-1) character = char('|', '#d96')
         }
         layer += character
      } 
      layer += char('\\')
      append(layer)

      treeWidth += 1
   }
   console.log(stumpHeight)
   for(i = 0; i < stumpHeight; i++){
      layer = char('|', '#d96')
      for(var o = 0; o < stumpWidth*2-2; o++) {
         layer += char(i === stumpHeight-1 ? '_' : '&nbsp', '#d96')
      }
      layer += char('|', '#d96')
      append(layer)
   }
   
   setTimeout(function(){
      var spans = document.querySelectorAll('span')
      for(var i = 0; i < spans.length; i++) {
         spans[i].style.transform = ''
         spans[i].style.opacity = 1
      }
   }, 100)

   function append(text) {
      var div = document.createElement('div')
      div.innerHTML = text
      document.body.appendChild(div)
   }

   function char(char, color) {
      var span = document.createElement('span')
      span.style.color = color || '#FFF'
      span.innerHTML = char ? char : random()
      
      var valX = first ? Math.random() * 500 - 250 : 0
      var valY = first ? Math.random() * 500 - 250 : 0
      span.style.transform = `translateX(${valX}px) translateY(${valY}px)`
      span.style.opacity = first ? 0 : 1
      return span.outerHTML
   }

   function random() {
      var array = [
         `<span style="color:#465;">p</span>`,
         `<span style="color:#465;">d</span>`,
         `<span style="color:#465;">f</span>`,
         `<span style="color:#465;">r</span>`,
         `<span style="color:#465;">W</span>`,
         `<span style="color:#FCD101;">o</span>`,
         `<span style="color:#0083FF;">o</span>`,
         `<span style="color:#FF6159;">o</span>`
      ]
      return array[Math.floor(Math.random() * array.length)]
   }
   first = false
}
//generate()
