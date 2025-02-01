import Link from "next/link";
import {slug} from "github-slugger";
import { badgeVariants } from "@/components/ui/badge"


interface TagProps {
    tag: string;
    current?: boolean;
    count?: number;
}

export function Tag ({tag, current, count}: TagProps) {
    return 
    <Link className={badgeVariants({variant:current ? "default" : "secondary" })} href={`/tags/${slug(tag)}`}>
        {tag}
    </Link>
};