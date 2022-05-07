import { FaImage, FaImages, FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineVideoLibrary, MdOutlineSlowMotionVideo } from 'react-icons/md';
import { ContentTag } from '../../../types/art';
import styles from '../artContent.module.scss';

interface ContentTagsProps {
    tags: Array<ContentTag>;
}

interface TagIconProps {
    icon: JSX.Element;
}

function TagIcon({ icon }: TagIconProps) {
    return <div className={styles.tagIcon}>{icon}</div>;
}

const ICONS_BY_TAG = {
    [ContentTag.IMAGE]: <FaImage />,
    [ContentTag.IMAGES]: <FaImages />,
    [ContentTag.VIDEO]: <MdOutlineSlowMotionVideo />,
    [ContentTag.VIDEOS]: <MdOutlineVideoLibrary />,
    [ContentTag.IMAGE_VIDEO]: <FaPhotoVideo />,
};

function ContentTags({ tags }: ContentTagsProps) {
    return (
        <>
            {tags.map(tag => (
                <TagIcon key={tag} icon={ICONS_BY_TAG[tag]} />
            ))}
        </>
    );
}

export default ContentTags;
