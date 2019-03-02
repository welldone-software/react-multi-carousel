/// <reference types="react" />
interface responsiveType {
    [key: string]: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
}
interface CarouselProps {
    responsive: responsiveType;
    deviceType?: string;
    forSSR?: boolean;
    slidesToSlide: number;
    disableDrag?: boolean;
    removeArrow?: boolean;
    disableSwipeOnMobile?: boolean;
    removeArrowOnDeviceType?: string | Array<string>;
    children: React.ReactNode;
    customLeftArrow?: React.ReactElement<any>;
    customRightArrow?: React.ReactElement<any>;
    infinite?: boolean;
    contentClassName?: string;
    itemClassName?: string;
    containerClassName?: string;
    transition?: string;
}
interface CarouselInternalState {
    itemWidth: number;
    slidesToShow: number;
    currentSlide: number;
    totalItems: number;
    activeItem: any;
    domLoaded: boolean;
    deviceType?: string;
}
export { CarouselInternalState, CarouselProps, responsiveType };