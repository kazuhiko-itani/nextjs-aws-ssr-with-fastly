export default function Index({ current }: { current: string }) {
  return <div>current time is {current}.</div>;
}

export async function getServerSideProps() {
  const date = new Date();
  const current = date.toLocaleString();

  return {
    props: {
      current,
    },
  };
}
