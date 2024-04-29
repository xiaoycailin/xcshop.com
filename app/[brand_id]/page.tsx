"use client"

import Page from "@/components/Page";
import { withData } from "@/middleware/withData";
import { StaticData } from "@/interface/Metadata";

export default withData(({ data, params }: { data?: StaticData | null, params: { brand_id: string } }) => {

    console.log(params)
    return (
        <Page useAppBar data={data}>
            <title>Page Dynamic Router</title>
        </Page>
    );
});