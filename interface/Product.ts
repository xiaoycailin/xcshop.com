export interface ImageProp {
    src?: string,
    alt?: string,
    name?: string,
    width?: number | string
    height?: number | string,
    clickable?: boolean,
    href?: string,
    description?: string
}

export interface Route {
    name?: string,
    path?: string,
    image?: ImageProp
}
export interface Brand {
    name?: string,
    images?: {
        helper?: ImageProp,
        banners?: ImageProp[],
        thumbnail?: ImageProp
    },
    provider?: string,
    brand_id?: string,
    status?: boolean,
    description?: string,
    helper?: string,
    extends?: Route[],
    input_method?: 'one_id' | 'double_id' | 'with_server_list',
    server_list?: any[],
    id_checker?: string
}