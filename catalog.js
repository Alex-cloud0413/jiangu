export const REGION_ORDER = ['东亚','南亚','西亚与中亚','非洲','欧洲','美洲','大洋洲'];
const featuredIds = ['su-shi','marie-curie','nelson-mandela','murasaki-shikibu','leonardo-da-vinci','frida-kahlo','rabindranath-tagore','kate-sheppard'];
const normalize = text => String(text || '').toLocaleLowerCase().replace(/[\s·・\-—.,，。]/g,'');

export function catalogPeople(people, {region='全部',query=''} = {}) {
  const key = normalize(query);
  const ordered = [...people].sort((a,b) => {
    const ai=featuredIds.indexOf(a.id),bi=featuredIds.indexOf(b.id);
    return (ai<0 ? featuredIds.length : ai)-(bi<0 ? featuredIds.length : bi);
  });
  return ordered.filter(person => (region==='全部' || person.region===region) && (!key || normalize([person.name,person.id,person.country,person.region,person.role,person.title,...person.tags].join(' ')).includes(key)));
}
