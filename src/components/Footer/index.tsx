import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '成师亿出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined/> 成师亿 GitHub</>,
          href: 'https://github.com/chengAron',
          blankTarget: true,
        },
        {
          title: <>备案号 蜀ICP备2024053935号-1</>,
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
