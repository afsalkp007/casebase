import broadbandInBasra from '../../components/cases/broadbandInBasra';
import laraguayAssistance from '../../components/cases/laraguayAssistance';
import slumpingToothpaste from '../../components/cases/slumpingToothpaste';
import aromaFlip from '../../components/cases/aromaFlip';
import publishingHouseProfits from '../../components/cases/publishingHouseProfits';
import sportOfKings from '../../components/cases/sportOfKings';

/* Company Thumbnail Images */
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';
import mckImgSrc from '../../assets/images/company-logos/mck/mck-logo.png';
import bainImgSrc from '../../assets/images/company-logos/bain/bain-logo.png';
import deloitteImgSrc from '../../assets/images/company-logos/deloitte/deloitte-logo.png';
import accentureImgSrc from '../../assets/images/company-logos/accenture/accenture-logo.png';


export default [
  {
    name: 'Slumping Toothpaste Sales',
    sku: 'toothpaste_case_purchase',
    company: 'Boston Consulting Group',
    blurb: 'Crestgate is one of the nation\'s largest toothpaste providers. Review demand curves and sales numbers to formulate a strategy for the CEO.',
    thumbnail: bcgImgSrc,
    pages: slumpingToothpaste,
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
  {
    name: 'An Aromatic Quick Flip',
    sku: 'aroma_case_purchase',
    company: 'Bain & Company',
    blurb: 'Arabel Flavors & Fragrances has seen declining profits over the past decade. Help determine if there’s a roadmap to profitability.',
    thumbnail: bainImgSrc,
    pages: aromaFlip,
  },
  {
    name: 'Publishing House Profits',
    sku: 'publishing_house_profits',
    company: 'Deloitte',
    blurb: 'The growth of the internet has pressured traditional book publishers. Help Marvin Press develop a plan for growth in the new landscape.',
    thumbnail: deloitteImgSrc,
    pages: publishingHouseProfits,
  },
  {
    name: 'The Sport of Kings',
    sku: 'sport_of_kings',
    company: 'Accenture',
    blurb: 'A storied Kentucky race horse farm considers licensing its name and image to a supplements manufacturer to boost revenue.',
    thumbnail: accentureImgSrc,
    pages: sportOfKings,
  },
];
