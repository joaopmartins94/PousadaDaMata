	$(function(){
	
		$("#sombra").css("display", "none");
	 
		$("#sombra").fadeIn('show');
	 
		$("a").click(function(event){
			event.preventDefault();
			linkLocation = this.href;
			$("#sombra").fadeOut(1500, redirectPage);
		});
	 
		function redirectPage() {
			window.location = linkLocation;
		}
		
	})