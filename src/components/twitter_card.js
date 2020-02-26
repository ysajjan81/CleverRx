import React, { Component }  from 'react';

export default twitter_card

function twitter_card (props) {
	var name = props.name
	var screen_name = props.screen_name
	var tweets = props.tweets
	var following = props.following
	var followers = props.followers
	var profile_link = "https://twitter.com/" + screen_name
	var description = props.description.substring(0,25)
	if(description == "")
		description = <div><li>&nbsp;</li></div>;
	var followers_link = "https://twitter.com/" + screen_name + "/followers"
	var following_link = "https://twitter.com/" + screen_name + "/following"
	var profile_image = props.profile_image
	var background_image = props.background_image
	console.log(background_image)

return ( <React.Fragment>
	    <a href={ profile_link } target='_blank' class="twPc-bg twPc-block" style={{ backgroundImage : 'url('+ background_image + ')' }}></a>
		<div style={{ backgroundColor : '#DCDCDC'}}>
			<a title="Desain 360" href={ profile_link } target='_blank' class="twPc-avatarLink">
				<img alt="Mert Salih Kaplan" src={ profile_image } class="twPc-avatarImg" />
			</a>

			<div class="twPc-divUser">
				<div class="twPc-divName">
					<a href={ profile_link } target='_blank'>{ name }</a>
				</div>
				<span>
					<a href={ profile_link } target='_blank'>@<span>{ screen_name }</span></a>
				</span>
			</div>

			<div class="twPc-divStats"> 
			{ description }
			</div>
			
			<div class="twPc-divStats">
				<ul class="twPc-Arrange">
					<li class="twPc-ArrangeSizeFit">
						<a href={ profile_link } target='_blank' title="Tweet">
							<span class="twPc-StatLabel twPc-block">Tweets</span>
							<span class="twPc-StatValue">{ tweets }</span>
						</a>
					</li>
					<li class="twPc-ArrangeSizeFit">
						<a href={ following_link } target='_blank' title="Following">
							<span class="twPc-StatLabel twPc-block">Following</span>
							<span class="twPc-StatValue">{ following }</span>
						</a>
					</li>
					<li class="twPc-ArrangeSizeFit">
						<a href={ followers_link } target='_blank' title="Followers">
							<span class="twPc-StatLabel twPc-block">Followers</span>
							<span class="twPc-StatValue">{ followers }</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</React.Fragment>
	);
}






