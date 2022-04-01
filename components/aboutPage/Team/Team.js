import members from './team.json'

const Team = () => {
	return (
		<section className='cre_team_member_section padding_top'>
			<div className='container custom_container'>
				<div className='row justify-content-between align-items-center mb_80'>
					<div className='col-lg-12'>
						<div className='section_title text-center position-relative wow fadeInUp'>
							<h2 className='title'>
								Meet Our <span>Team</span>{' '}
							</h2>
							<h2 className='parallax_text d-none d-lg-block'>
								Team Mates
							</h2>
						</div>
					</div>
				</div>
				<div className='row gx-5 team-gutter-row'>
					{members.map((member) => (
						<div
							key={member.name}
							className='col-6 col-lg-3 col-sm-6 cre_team_member_wrapper wow fadeInUp'
						>
							<div className='team_member_img'>
								<img
									src={member.image}
									alt={member.name}
									className='img-fluid'
								/>
							</div>
							<h4 className='name'>{member.name}</h4>
							<p className='position'>{member.designation}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Team
