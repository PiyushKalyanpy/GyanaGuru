import React from 'react';

const ContCard = (props: { image: any; title: any; commits: any; profile: any; }) => {
  var x = '';
  const { image, title, commits, profile} = props;
  if (commits === 1) {
    var x = 'commit';
  } else {
    var x = 'commits';
  }

  const openContributorProfile = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        className='card ml-4 mr-4' onClick={() => openContributorProfile(profile)}>
        <img className='profile rounded-full  pt-2   w-24 h-24 hover:scale-110 drop-shadow-xl' src={`https://images.weserv.nl/?output=webp&url=${image}`} alt={title} />
        <div className='content  mt-3 ml-4'>
          {/* <h1 className='text'>{title}</h1> */}
          <p>
            {/* {commits} {x} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContCard;