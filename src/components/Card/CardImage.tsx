import Image, { ImageProps } from "next/image";

export const CardImage = (props: ImageProps) => {
    return (
        <Image {...props} />
    );
};