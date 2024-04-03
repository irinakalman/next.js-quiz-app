interface Pageprops {
    params: {
        quizzId: string
    }
}

const Page = (props: Pageprops) => {
    console.log({props});
    return <>this is the page that contains a single quiz: { props.params.quizzId}</>
   
}

export default Page;