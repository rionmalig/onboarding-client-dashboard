import { Badge } from "@/components/ui/badge";

type CategoryItemMetadataProps = {
  metadata: {
    programs: string[];
    description?: string;
  }
}

const CategoryItemMetadata = ({ metadata }: CategoryItemMetadataProps) => {

  const programs = metadata.programs;

  return (
    <div className="mt-3 pl-4 border-l-2 border-accent/30">
      <div className="flex flex-wrap gap-2">
        {programs.map((program, idx) => (
          <Badge key={idx} variant="outline" className="bg-background">
            {program}
          </Badge>
        ))}
        {(programs.length === 0) && (
          <span className="text-sm text-muted-foreground italic">No programs defined</span>
        )}
      </div>
      {metadata.description && (
        <p className="text-sm text-muted-foreground mt-2">
          {metadata.description}
        </p>
      )}
    </div>
  )
}

export default CategoryItemMetadata;