DID_GROUP = {
	addUrl : sz_PublicHost + 'did/did-group/add',
	searchUrl : sz_PublicHost + 'did/did-group/search',
	editUrl : sz_PublicHost + 'did/did-group/edit',
	saveUrl : sz_PublicHost + 'did/did-group/save',
	deleteUrl : sz_PublicHost + 'did/did-group/delete',
	init : function(){		
		$('#add_group').click(function(){
			DID_GROUP.add();
		});
		$('#search').click(function(e){
			DID_GROUP.search();
		});
		
		$('#clear-form').click(function(){
			$('#textfield').val('');
		});
		DID_GROUP.search();
		$('a.close, #close-popup').live('click', function() { 
			$('#fade , .popup_block').fadeOut(function() { 
			$('#fade, a.close').remove(); //fade them both out 
			}); 
			return false; 
		}); 
	},
	add: function(){
		var $dataRequest = $('#form-add').find('input, select').serializeArray();
		ajaxCore.ajaxGetJson(
				DID_GROUP.addUrl,
			$dataRequest,
			function(response){
				if (response.sz_Message)	
				{
					alert(response.sz_Message);
					$('#clear-form').click();
					DID_GROUP.search();
				}
			},
			function(response){
				if (response.sz_Message)
				{
					alert(response.sz_Message);
				}
			});
	},
	
	search: function(){
		var $dataRequest = $('.filterbox').find('input, select').serializeArray(); 
		ajaxCore.ajaxGetHtml(
				DID_GROUP.searchUrl,
			$dataRequest,
			function(response){
				$('#list-view tbody').html(response);
			},
			function(response){
				alert('have error !')
			});
	},
	edit : function(the_i_Id)
	{
		ajaxCore.ajaxGetHtml(
				DID_GROUP.editUrl,
				{'id': the_i_Id},
				function(response){
					if (response)	
					{
						popID = 'popup_block';
						$('#' + popID + ' .popup_content').html(response);
						$('#' + popID).fadeIn().css({ 'width': Number( 510 ) }).prepend('<a href="#" class="close"><img src="'+ sz_PublicHost +'images/dialog_close.png" class="btn_close" title="Close" alt="Close" /></a>');
						var popMargTop = ($('#' + popID).height() + 10) / 2; 
						var popMargLeft = ($('#' + popID).width() + 80) / 2; 
						//Apply Margin to Popup 
						$('#' + popID).css({ 
						'margin-top' : -popMargTop,
						'margin-left' : -popMargLeft 
						});
						$('body').append('<div id="fade"></div>');
						$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
					}
				},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
					}
				});
		return false;
	},
	save: function(){
		var $dataRequest = $('#form-edit').find('input, select').serializeArray(); 
		ajaxCore.ajaxGetJson(
				DID_GROUP.saveUrl,
			$dataRequest,
			function(response){
				if (response.sz_Message)	
				{					
					$('#close-popup').click();
					alert(response.sz_Message);
					DID_GROUP.search();
				}
			},
			function(response){
				if (response.sz_Message)	
				{
					alert(response.sz_Message);
				}
			});
	},
	delete : function(i)
	{
		ajaxCore.ajaxGetJson(
				DID_GROUP.deleteUrl,
				{id : i},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
						DID_GROUP.search();
					}
				},
				function(response){
					if (response.sz_Message)	
					{
						alert(response.sz_Message);
					}
				});
		
	}
}
$(document).ready(function() { 
	DID_GROUP.init();
}); 