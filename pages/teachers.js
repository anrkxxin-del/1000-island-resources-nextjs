import SEO from '../components/SEO';

export default function TeachersPage() {
  return (
    <>
      <SEO
        title="千岛游学外教团队 | 菲律宾英语外教介绍"
        description="千岛游学精选菲律宾外教团队，涵盖商务英语、IELTS备考、成人口语、少儿英语等方向，一对一教学，可预约试课。"
        canonical="https://1000-island.com/resource/teachers"
      />
      <iframe
        src="/teachers.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block',
        }}
        title="千岛游学外教团队"
      />
    </>
  );
}
