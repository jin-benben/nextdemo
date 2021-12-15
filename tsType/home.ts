
export interface Total {
	value: number;
	relation: string;
}

export interface HotSkuInfo {
	active_site_id: number;
	spu_id: string;
	id: string;
	sort: number;
	store_id: number;
	gc_id1: number;
	gc_id2: number;
	gc_id3: number;
	spu_sale_num: number;
	spu_click: number;
	spu_state: number;
	spu_create_time: string;
	size_count: number;
	color_count: number;
	color_names: string;
	store_years: number;
	store_name: string;
	sku_image: string;
	sku_name: string;
	sku_id: number;
	sku_price: string;
	create_time: string;
	update_time: string;
	status: number;
}

export interface Hit {
	_index: string;
	_type: string;
	_id: string;
	_score?: any;
	_source: HotSkuInfo;
	sort: number[];
}

export interface LiveInfo {
	total: Total;
	max_score?: any;
	hits: Hit[];
	active_name: string;
}

export interface CategoryItem {
	[key]:any
}