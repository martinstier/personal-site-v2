
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/img0.JPG" | "/images/img1.jpeg" | "/images/img10.jpg" | "/images/img11.JPG" | "/images/img12.jpeg" | "/images/img13.jpeg" | "/images/img14.JPG" | "/images/img15.JPG" | "/images/img16.jpeg" | "/images/img17.jpg" | "/images/img2.JPG" | "/images/img3.JPG" | "/images/img4.JPG" | "/images/img5.JPG" | "/images/img6.JPG" | "/images/img7.jpg" | "/images/img8.jpg" | "/images/img9.JPG" | "/robots.txt" | string & {};
	}
}