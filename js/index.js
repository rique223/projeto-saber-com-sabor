$(document).ready(() => {
	$('.slider-banner').slick({
		arrows: true,
		dots: true,
		prevArrow:
			"<svg width='50' height='102' viewBox='0 0 50 102' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='50' height='102' fill='url(#pattern0)' fill-opacity='0.5'/><defs><pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'><use xlink:href='#image0' transform='scale(0.04 0.0196078)'/></pattern><image id='image0' width='25' height='51' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAzCAYAAABi3qMzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTA2VDE2OjA5LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA2LTA2VDE2OjA5LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0wNlQxNjowOS0wMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkOGI2NWIzZS1lYjc4LTRhNGItODUyMS1iMzdjNjIxMjU4MmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NDc3YWM2OC05ODI0LTA4NGItYWQ4Ni1jYzQ2Y2FhMmE4MTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YjQ1YzE1Yy0wYzE1LTFmNGYtYjllNC1jMjM4YWY4NjZiMGYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZiNDVjMTVjLTBjMTUtMWY0Zi1iOWU0LWMyMzhhZjg2NmIwZiIgc3RFdnQ6d2hlbj0iMjAyMC0wNi0wNlQxNjowOS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkOGI2NWIzZS1lYjc4LTRhNGItODUyMS1iMzdjNjIxMjU4MmQiIHN0RXZ0OndoZW49IjIwMjAtMDYtMDZUMTY6MDktMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz44au/iAAACGElEQVRYhb3YMUhVURzH8d/riUND6eCkEYE05aCQNBQYJLQUOpVjuuaorRm0NdRQi4JTgVO0qTgoQTg46FAOtgWFohBKkPjo23D+h3t92vO9+86/C//hcc99n3vvOeee8/+XADke3ZJGSo7IZUkfJR2dcwI6JS1JuiRpTkDq6AA+E45XgFIDbcC6ATNAKTVyEVg14B1QjudSAeeBFQPeAy358ymAVmDBgAX7rZRIK/DBgBV7ohPtmgHKwJwBq9Ynp7YtCpSAWQM2gPZa7YsCrw3YJMyLmtcUQV4Y8BXoqueaRoGnBnwDrtR7XSPAhAE7wNVGbq7ehuMG7AE9jb7iehqNAn+An0B/gT48E3kIVIBfwK0iwFnIEHAEHAKDRYFayF3780PgfjPAv5ABez0V4EGzwGnIDWDfOno0BVCN9BJGEIQhmwTII9cIkwzgSUogIt3AdwOepQYi8smANQ8g/yQ/DJryQqr7ZMILEdBHNroeeyEizJMDwjx55IUIuI3zjI+R/3bd80IEDBO+wr+BO16IgBGy9eSmFyJgjGxlvO6FiGyN38VpjY8xadA2TruVGFMGue27YsQd5BZOO0gR9sJvDPqC0144QrMGrRNyxeSIOJmfXPBAxPFMaxmHTCsPLRo0j0POGKM6+y17IOJ4Hv8Whzw+RhtZRWIah4pEjHxt5SUgr1JUp6RlhXrX8/9R76p4IpJV7v4CYBaqln9Fi3MAAAAASUVORK5CYII='/></defs></svg>",
		nextArrow:
			"<svg width='50' height='102' viewBox='0 0 50 102' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='50' height='102' transform='matrix(-1 0 0 1 50 0)' fill='url(#pattern0)' fill-opacity='0.5'/><defs><pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'><use xlink:href='#image0' transform='scale(0.04 0.0196078)'/></pattern><image id='image0' width='25' height='51' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAzCAYAAABi3qMzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTA2VDE2OjA5LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA2LTA2VDE2OjA5LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0wNlQxNjowOS0wMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkOGI2NWIzZS1lYjc4LTRhNGItODUyMS1iMzdjNjIxMjU4MmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NDc3YWM2OC05ODI0LTA4NGItYWQ4Ni1jYzQ2Y2FhMmE4MTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YjQ1YzE1Yy0wYzE1LTFmNGYtYjllNC1jMjM4YWY4NjZiMGYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZiNDVjMTVjLTBjMTUtMWY0Zi1iOWU0LWMyMzhhZjg2NmIwZiIgc3RFdnQ6d2hlbj0iMjAyMC0wNi0wNlQxNjowOS0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkOGI2NWIzZS1lYjc4LTRhNGItODUyMS1iMzdjNjIxMjU4MmQiIHN0RXZ0OndoZW49IjIwMjAtMDYtMDZUMTY6MDktMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz44au/iAAACGElEQVRYhb3YMUhVURzH8d/riUND6eCkEYE05aCQNBQYJLQUOpVjuuaorRm0NdRQi4JTgVO0qTgoQTg46FAOtgWFohBKkPjo23D+h3t92vO9+86/C//hcc99n3vvOeee8/+XADke3ZJGSo7IZUkfJR2dcwI6JS1JuiRpTkDq6AA+E45XgFIDbcC6ATNAKTVyEVg14B1QjudSAeeBFQPeAy358ymAVmDBgAX7rZRIK/DBgBV7ohPtmgHKwJwBq9Ynp7YtCpSAWQM2gPZa7YsCrw3YJMyLmtcUQV4Y8BXoqueaRoGnBnwDrtR7XSPAhAE7wNVGbq7ehuMG7AE9jb7iehqNAn+An0B/gT48E3kIVIBfwK0iwFnIEHAEHAKDRYFayF3780PgfjPAv5ABez0V4EGzwGnIDWDfOno0BVCN9BJGEIQhmwTII9cIkwzgSUogIt3AdwOepQYi8smANQ8g/yQ/DJryQqr7ZMILEdBHNroeeyEizJMDwjx55IUIuI3zjI+R/3bd80IEDBO+wr+BO16IgBGy9eSmFyJgjGxlvO6FiGyN38VpjY8xadA2TruVGFMGue27YsQd5BZOO0gR9sJvDPqC0144QrMGrRNyxeSIOJmfXPBAxPFMaxmHTCsPLRo0j0POGKM6+y17IOJ4Hv8Whzw+RhtZRWIah4pEjHxt5SUgr1JUp6RlhXrX8/9R76p4IpJV7v4CYBaqln9Fi3MAAAAASUVORK5CYII='/></defs></svg>",
	});

	$('.slider-categorias').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow:
			"<div class='slick-prev'><svg width='28' height='50' viewBox='0 0 28 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.20144 24.0032L24.7882 0.416514C25.3435 -0.138838 26.2342 -0.138838 26.7895 0.416514C27.3449 0.971866 27.3449 1.86252 26.7895 2.41788L4.20872 24.9987L26.7895 47.5795C27.3449 48.1349 27.3449 49.0255 26.7895 49.5809C26.5171 49.8533 26.1504 50 25.7941 50C25.4378 50 25.0711 49.8638 24.7987 49.5809L1.21192 25.9941C0.656565 25.4493 0.656567 24.5481 1.20144 24.0032Z' fill='#FB9232'/></svg></div>",
		nextArrow:
      "<div class='slick-next'><svg width='28' height='50' viewBox='0 0 28 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26.7986 24.0032L3.21182 0.416514C2.65647 -0.138838 1.76581 -0.138838 1.21046 0.416514C0.655107 0.971866 0.655107 1.86252 1.21046 2.41788L23.7913 24.9987L1.21046 47.5795C0.655107 48.1349 0.655107 49.0255 1.21046 49.5809C1.4829 49.8533 1.84964 50 2.2059 50C2.56216 50 2.92891 49.8638 3.20134 49.5809L26.7881 25.9941C27.3434 25.4493 27.3434 24.5481 26.7986 24.0032Z' fill='#FB9232'/></svg></div>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  
  $('.slider-professores').slick({
    arrows: true,
    slidesToShow: 1,
    prevArrow:
        "<div class='slick-prev'><svg width='28' height='50' viewBox='0 0 28 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.20144 24.0032L24.7882 0.416514C25.3435 -0.138838 26.2342 -0.138838 26.7895 0.416514C27.3449 0.971866 27.3449 1.86252 26.7895 2.41788L4.20872 24.9987L26.7895 47.5795C27.3449 48.1349 27.3449 49.0255 26.7895 49.5809C26.5171 49.8533 26.1504 50 25.7941 50C25.4378 50 25.0711 49.8638 24.7987 49.5809L1.21192 25.9941C0.656565 25.4493 0.656567 24.5481 1.20144 24.0032Z' fill='#FB9232'/></svg></div>",
      nextArrow:
        "<div class='slick-next'><svg width='28' height='50' viewBox='0 0 28 50' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M26.7986 24.0032L3.21182 0.416514C2.65647 -0.138838 1.76581 -0.138838 1.21046 0.416514C0.655107 0.971866 0.655107 1.86252 1.21046 2.41788L23.7913 24.9987L1.21046 47.5795C0.655107 48.1349 0.655107 49.0255 1.21046 49.5809C1.4829 49.8533 1.84964 50 2.2059 50C2.56216 50 2.92891 49.8638 3.20134 49.5809L26.7881 25.9941C27.3434 25.4493 27.3434 24.5481 26.7986 24.0032Z' fill='#FB9232'/></svg></div>",
  });
});


let coll = document.getElementsByClassName("colapsavel");
let i;

for(i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function (e) {
    let conteudo = this.nextElementSibling;
    if(conteudo.style.maxHeight){
      conteudo.style.paddingBottom = "0";
      conteudo.style.maxHeight = null;
      e.currentTarget.childNodes[0].style.transform = "none";
    } else {
      conteudo.style.paddingBottom = "1.5%";
      conteudo.style.maxHeight = conteudo.scrollHeight + "px";
      e.currentTarget.childNodes[0].style.transform = "rotateZ(45deg)";
    }
  });
}

function menu() {
  let navMenu = document.getElementById("container-navbar-mob");

  navMenu.classList.toggle("closed");
  
}

document.querySelector("#span-botao").addEventListener('click', menu);


