import { Skeleton } from "@mui/material"

const SkeletonLoaderComponent = ({ variant, height, width, marginTop }) => {
    return (
        <>
            <Skeleton
                sx={{
                    mt: marginTop
                }}
                variant={variant}
                height={height}
                width={width}
            />
        </>
    )
}

export default SkeletonLoaderComponent


