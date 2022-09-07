const LinkCard = ({ link }) => {
  return (
    <div className='col-xl-3 col-lg-4 col-md-6'>
      <div className='linkcard'>
        <img className='img-fluid' src={link.x_featured_media_original} alt={link.title.rendered} />
        <div className='link-card-content'>
          <a target='_blank' rel='noreferrer' href={link.x_metadata.link_url}>
            {link.title.rendered}
          </a>
        </div>
      </div>
    </div>
  )
}

export default LinkCard
