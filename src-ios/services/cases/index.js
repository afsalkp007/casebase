import broadbandInBasra from '../../components/cases/broadbandInBasra';
import laraguayAssistance from '../../components/cases/laraguayAssistance';
import caseTwo from '../../components/cases/slumpingToothpaste';

/* Company Thumbnail Images */
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';
import mckImgSrc from '../../assets/images/company-logos/mck/mck-logo.png';


export default [
  {
    name: 'Slumping Toothpaste Sales',
    sku: 'toothpaste_case_purchase',
    company: 'Boston Consulting Group',
    blurb: 'Crestgate is one of the nation\'s largest toothpaste providers. Review demand curves and sales numbers to formulate a strategy for the CEO.',
    thumbnail: bcgImgSrc,
    pages: caseTwo,
  },
  {
    name: 'Broadband in Basra',
    sku: 'broadband_case_purchase',
    company: 'Boston Consulting Group',
    blurb: 'Investors are hoping to build a major broadband internet provider in Basra, Iraq. Help assess the viability of the business plan.',
    thumbnail: bcgImgSrc,
    pages: broadbandInBasra,
  },
  {
    name: 'Disability Assistance Reform',
    sku: 'laraguay_case_purchase',
    company: 'McKinsey & Company',
    blurb: 'The small nation of Laraguay needs guidance on disability reform. Comparison against other national programs will inform your counsel.',
    thumbnail: mckImgSrc,
    pages: laraguayAssistance,
  },
];
