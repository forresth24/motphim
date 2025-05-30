import { Suspense } from 'react'
import { BestRated, BestRatedSkeleton } from './_best_rated'
import { Countries, CountriesSkeleton } from './_countries'
import { Genres, GenresSkeleton } from './_genres'
import {
  MostWatchedSeries,
  MostWatchedSeriesSkeleton,
} from './_most_watched-series'
import { ReviewsCount, ReviewsCountSkeleton } from './_reviews-count'
import { Status, StatusSkeleton } from './_status'
import { TopActors, TopActorsSkeleton } from './_top_actors'
import { TotalHours, TotalHoursSkeleton } from './_total_hours'

export default function StatsPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Suspense fallback={<TotalHoursSkeleton />}>
        <TotalHours />
      </Suspense>

      <Suspense fallback={<ReviewsCountSkeleton />}>
        <ReviewsCount />
      </Suspense>

      <Suspense fallback={<MostWatchedSeriesSkeleton />}>
        <MostWatchedSeries />
      </Suspense>

      <Suspense fallback={<GenresSkeleton />}>
        <Genres />
      </Suspense>

      <Suspense fallback={<TopActorsSkeleton />}>
        <TopActors />
      </Suspense>

      <Suspense fallback={<CountriesSkeleton />}>
        <Countries />
      </Suspense>

      <Suspense fallback={<BestRatedSkeleton />}>
        <BestRated />
      </Suspense>

      <Suspense fallback={<StatusSkeleton />}>
        <Status />
      </Suspense>
    </div>
  )
}
