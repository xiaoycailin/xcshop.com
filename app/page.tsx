"use client"

import Page from "@/components/Page";
import './page.css'
import { withData } from "@/middleware/withData";
import { StaticData } from "@/interface/Metadata";
import ResponsiveCarousel from '../components/BannerSlider';
import Space, { SpaceMarginAuto } from '@/components/Space';

import FlashSale from "@/components/FlashSale";
import BrandList from "@/components/BrandList";
export default withData(({ data }: { data?: StaticData | null }) => {

    return (
        <Page useAppBar data={data}>
            <title>Home Page</title>

            <Space />
            <ResponsiveCarousel />

            <SpaceMarginAuto />
            <FlashSale />
            <BrandList />
        </Page>
    );
});