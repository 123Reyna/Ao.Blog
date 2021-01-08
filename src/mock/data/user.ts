
const BlogActireData=[] ;
BlogActireData.push({
  bID: 1,
  btitle: 'K8s',
  bRemark: '运维',
  bcategory: '运维',
  bsubmitter: 'Ao.Reyna',
  burl:"https://shimo.im/folder/Xhy3YVrtdYGwQKdQ",
  bCreateTime:"2021-01-08"
},
{
  bID: 1,
  btitle: '.net5',
  bRemark: '开发',
  bcategory: '开发',
  bsubmitter: 'Ao.Reyna',
  burl:"https://shimo.im/docs/CCj3DdyVXwddykvt",
  bCreateTime:"2021-01-08"
},
{
  bID: 1,
  btitle: 'github',
  bRemark: '代码托管',
  bcategory: '代码托管',
  bsubmitter: 'Ao.Reyna',
  burl:"https://github.com/123Reyna?tab=repositories",
  bCreateTime:"2021-01-08"
},
{
  bID: 1,
  btitle: '微信公众号',
  bRemark: '小说',
  bcategory: '小说',
  bsubmitter: 'Ao.Reyna',
  burl:"https://mp.weixin.qq.com/s/6GONXqNn3FtCVk4NdCvCUg",
  bCreateTime:"2021-01-08"
},
{
  bID: 1,
  btitle: '简书',
  bRemark: '简书',
  bcategory: '小说',
  bsubmitter: 'Ao.Reyna',
  burl:"https://www.jianshu.com/u/87ba3231d394",
  bCreateTime:"2021-01-08"
});


const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push({
    id: 1,
    name: 'Reyna',
    addr: '344',
    'age|18-60': 1,
    birth: '12',
    sex: 0
  });
}

export { BlogActireData, Users };