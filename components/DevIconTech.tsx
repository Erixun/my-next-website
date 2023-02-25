import {
  Html5OriginalIcon,
  Css3OriginalIcon,
  ReactOriginalIcon,
  DeviconOriginalIcon,
  VscodeOriginalIcon,
  VuejsOriginalIcon,
  GitOriginalIcon,
  TypescriptOriginalIcon,
  JavascriptOriginalIcon,
  NextjsOriginalIcon,
  NodejsOriginalIcon,
  SassOriginalIcon,
  BitbucketOriginalIcon,
  DotnetcoreOriginalIcon,
  CsharpOriginalIcon,
  GithubOriginalIcon,
  BootstrapOriginalIcon,
  JiraOriginalIcon,
  VisualstudioPlainIcon,
  YarnOriginalIcon,
  AzureOriginalIcon,
  MysqlOriginalIcon,
  NpmOriginalWordmarkIcon,
  AngularjsOriginalIcon,
  ROriginalIcon,
  JestPlainIcon,
  MochaPlainIcon,
  DockerOriginalIcon,
  KubernetesPlainIcon,
  RubyOriginalIcon,
  BulmaPlainIcon,
  ExpressOriginalIcon,
} from "react-devicons";

const TechIcon = {
  html5: Html5OriginalIcon,
  css3: Css3OriginalIcon,
  react: ReactOriginalIcon,
  vscode: VscodeOriginalIcon,
  vuejs: VuejsOriginalIcon,
  git: GitOriginalIcon,
  typescript: TypescriptOriginalIcon,
  javascript: JavascriptOriginalIcon,
  nextjs: NextjsOriginalIcon,
  nodejs: NodejsOriginalIcon,
  sass: SassOriginalIcon,
  bitbucket: BitbucketOriginalIcon,
  dotnetcore: DotnetcoreOriginalIcon,
  csharp: CsharpOriginalIcon,
  github: GithubOriginalIcon,
  bootstrap: BootstrapOriginalIcon,
  jira: JiraOriginalIcon,
  visualstudio: VisualstudioPlainIcon,
  yarn: YarnOriginalIcon,
  azure: AzureOriginalIcon,
  mysql: MysqlOriginalIcon,
  npm: NpmOriginalWordmarkIcon,
  angularjs: AngularjsOriginalIcon,
  r: ROriginalIcon,
  jest: JestPlainIcon,
  mocha: MochaPlainIcon,
  docker: DockerOriginalIcon,
  kubernetes: KubernetesPlainIcon,
  ruby: RubyOriginalIcon,
  bulma: BulmaPlainIcon,
  express: ExpressOriginalIcon,
};

const TooDarkIcon = [
  "bitbucket",
  "github",
  "nextjs",
  "dotnetcore",
  "mysql",
  "visualstudio",
  "jest",
  "express",
];

const DevIconTech = ({ techId }) => {
  const Icon = TechIcon[techId] ?? DeviconOriginalIcon;

  const styles = {
    gridArea: "logo",
    ...(TooDarkIcon.includes(techId)
      ? {
          background: "#fcfaf0",
          borderRadius: "3px",
          padding: "2px 0",
        }
      : {}),
  };

  return <Icon className="devicon" size="100%" style={styles} />;
};

export default DevIconTech;
