$(document).ready(function () {

	// init position: sticky; polifill
	$('.sticky').Stickyfill();

	// init object-fit polifill
	objectFitImages();

	$("#my-menu").mmenu({
		"extensions": [
				"pagedim-white",
				"fx-menu-fade",
				//"listview-justify",
				"multiline",
				"shadow-page",
				//"popup"
			],
		navbar: {
			//title: '<img  alt="Мебельный салон Элит" src="icons/logo.png">'	
			title: '<div class="menu-logoo"></div>'
		},
		"offCanvas": {
			"position": "left",
			//"zposition": "front"
		},
		"counters": true,
		"navbars": [
			{
				"position": "top"
				},
			{
				"position": "bottom",
				"content": [
						"<a class='footer-link' href='tel:+380509087934'><i class='fa fa-phone' aria-hidden='true'></i><span>Киев</span></a>",
						"<a class='footer-link' href='tel:+380989437199'><i class='fa fa-phone' aria-hidden='true'></i><span>Волноваха</span></a>",
						"<a class='footer-link' href='tel:+380959352701'><i class='fa fa-phone' aria-hidden='true'></i><span>Угледар</span></a>"

					]
				}
			]

	}).show();



	var api = $("#my-menu").data("mmenu");
	$(window).on("resize", function () {
		api.close();
	});

	api.bind("open:finish", function () {
		$(".hamburger").addClass("is-active");
	});

	api.bind("close:finish", function () {
		$(".hamburger").removeClass("is-active");
	});

	api.bind("open:finish", function () {
		$(".hamburger").addClass("is-active");
	});

	$(document).on('opening', '.remodal', function () {
		$("#mm-0").css("z-index", 99999);
	});
	$(document).on('closing', '.remodal', function () {
		$("#mm-0").css("z-index", "");
	});



	// check if device is mobile:

	var isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

	if (isMobile) {
		$(".card_components .images_item").addClass("isMobileDevice");

	}




	/*


			//добавляем класс секции под хедером, для падинга
			//$("#underHeader").next().addClass("next_under_top");

			$(window).on("resize", setPaddingTopToHeader);


			var aboveHeader = document.querySelector("#aboveHeader").offsetHeight;
			console.log(aboveHeader);

			$("section.header, section#underHeader").affix({
				offset: {
					top: aboveHeader
				}
			});

			function setPaddingTopToHeader() {
				$("section.header, section#underHeader").on('affix.bs.affix', function () {
					var headerHight = document.querySelector("section.header").offsetHeight,
						underheaderHight = document.querySelector("section#underHeader").offsetHeight;
					$("#underHeader").next().addClass("next_under_top");
					$(".next_under_top").css("padding-top", headerHight + underheaderHight);

				});

				$("section.header, section#underHeader").on('affix-top.bs.affix', function () {
					$(".next_under_top").css("padding-top", "");

				});

			}
			setPaddingTopToHeader();






			//set padding-top to part of page under header

			function setPadding_top_to_site() {
				var partUnderHeader = $("#underHeader.affix + .next_under_top"),
					headerHight = document.querySelector("section.header").offsetHeight,
					headerHight = document.querySelector("section#underHeader").offsetHeight;
				if (partUnderHeader.length) {
					//partUnderHeader.css("padding-top", headerHight + headerHight);
				}
				console.log(partUnderHeader);


			}

			
			//$("section.categories .items_wrap").css("margin-top", -document.querySelector("section.categories .aside_block").offsetHeight);
			
			//console.log(document.querySelector("section.categories .aside_block").offsetHeight)

	*/




});

$(document).ready(function () {
	//$(window).resize(setBodyPadding);

	$(window).resize(function () {
		setTimeout(function () {
			setBodyPadding();
		}, 100);
	});

	function setBodyPadding() {
		let headerHeight = $(".wrapp_main_header").height();
		console.log(headerHeight);
		$("body").css("padding-top", headerHeight);
	}
	setBodyPadding();

	$(window).scroll(function () {
		let aboveHeaderHeight = $("#aboveHeader").height();

		if ($(window).scrollTop() > aboveHeaderHeight) {
			$(".wrapp_main_header").css("top", -aboveHeaderHeight);
			$("section.header").addClass("scrolled");
		} else {
			$(".wrapp_main_header").css("top", 0);
			$("section.header").removeClass("scrolled");
		}
	})

});


/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
